import React, { useState, useEffect, useCallback } from "react";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import { Download, Clock, FileDown, FileUp } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { filesize } from "filesize";
import { video as VideoType } from "@/generated/prisma/client";

dayjs.extend(relativeTime);

interface VideoCardProps {
  video: VideoType;
  onDownload: (url: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onDownload }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  const getThumbnailUrl = useCallback((publicId: string) => {
    return getCldImageUrl({
      src: publicId,
      width: 400,
      height: 225,
      crop: "fill",
      format: "jpg",
      quality: "auto",
      assetType: "video",
    });
  }, []);

  const getFullVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 1920,
      height: 1080,
    });
  }, []);

  const getPreviewUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 400,
      height: 225,
      rawTransformations: ["e_preview:duration_15:max_seg_9:min_seg_dur_1"],
    });
  }, []);

  const formatSize = useCallback((size: number) => {
    return filesize(size);
  }, []);

  const formatDuration = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  const compressionPercentage = Math.round(
    (1 - Number(video.compressedSize) / Number(video.originalSize)) * 100
  );

  useEffect(() => {
    setPreviewError(false);
  }, [isHovered]);

  const handlePreviewError = () => {
    setPreviewError(true);
  };

  return (
    <div
      className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Canvas / Preview */}
      <figure className="relative aspect-video w-full bg-base-300 overflow-hidden">
        {isHovered && !previewError ? ( //need to chek if preview error is true
          <video
            src={getPreviewUrl(video.publicId)}
            autoPlay
            muted
            loop
            playsInline
            onError={handlePreviewError}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={getThumbnailUrl(video.publicId)}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Video Duration Badge */}
        <div className="absolute bottom-2 right-2 badge badge-neutral badge-sm bg-neutral/80 text-neutral-content backdrop-blur-xs gap-1 font-mono">
          <Clock className="w-3 h-3" />
          {formatDuration(Number(video.duration))}
        </div>

        {/* Compression Efficiency Tag */}
        {compressionPercentage > 0 && (
          <div className="absolute top-2 left-2 badge badge-success badge-sm font-semibold text-success-content shadow">
            {compressionPercentage}% Saved
          </div>
        )}
      </figure>

      {/* Card Content */}
      <div className="card-body p-4 gap-3">
        {/* Title and Timestamp */}
        <div>
          <h2 className="card-title text-base font-bold line-clamp-1" title={video.title}>
            {video.title}
          </h2>
          <span className="text-xs text-base-content/60">
            {dayjs(video.createdAt).fromNow()}
          </span>
        </div>

        {/* Description */}
        {video.description && (
          <p className="text-xs text-base-content/70 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}

        <div className="divider my-0 opacity-50"></div>

        {/* File Size Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-base-content/80">
          <div className="flex items-center gap-1.5 truncate">
            <FileUp className="w-3.5 h-3.5 text-base-content/50 shrink-0" />
            <span className="truncate">Orig: {formatSize(Number(video.originalSize))}</span>
          </div>

          <div className="flex items-center gap-1.5 truncate">
            <FileDown className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-semibold text-primary truncate">
              Comp: {formatSize(Number(video.compressedSize))}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="card-actions justify-end mt-1">
          <button
            onClick={() => onDownload(getFullVideoUrl(video.publicId), video.title)}
            className="btn btn-primary btn-sm w-full gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;