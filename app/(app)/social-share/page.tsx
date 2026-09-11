"use client";

import React, { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
};

type SocialFormat = keyof typeof socialFormats;

export default function SocialShare() {

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<SocialFormat>("Instagram Square (1:1)");
  const [isUploading, setIsUploading] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true);
    }
  }, [selectedFormat, uploadedImage]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload Image.");

      const data = await response.json();
      console.log(data)
      setUploadedImage(data.publicId);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (!imageRef.current) return;

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedFormat.replace(/\s+/g, "_").toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error("Error downloading file", err);
      });
  };

  const currentSpecs = socialFormats[selectedFormat];

  return (

    <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Social Media Image Resizer
        </h1>
        <p className="text-base-content/70 mt-2">
          Upload an image and adapt it instantly for any social media dimension.
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body gap-6">
          {/* Controls Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Image File Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Upload Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading}
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>

            {/* Social Format Selector */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Select Social Media Format</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value as SocialFormat)}
                disabled={!uploadedImage || isUploading}
              >
                {Object.keys(socialFormats).map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Upload Progress Bar */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-base-content/70 font-medium">
                <span>Uploading to Cloudinary...</span>
                <span className="loading loading-spinner loading-xs text-primary"></span>
              </div>
              <progress className="progress progress-primary w-full"></progress>
            </div>
          )}

          <div className="divider my-0"></div>

          {/* Preview & Result Section */}
          {uploadedImage ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-between w-full gap-2">
                <span className="badge badge-outline badge-neutral font-mono text-xs">
                  {currentSpecs.width} × {currentSpecs.height} px ({currentSpecs.aspectRatio})
                </span>
                
                <button
                  onClick={handleDownload}
                  disabled={isTransforming}
                  className="btn btn-primary btn-sm"
                >
                  Download Image
                </button>
              </div>

              {/* Image Preview Canvas */}
              <div className="relative flex items-center justify-center bg-base-200/50 rounded-box border border-base-300 p-4 w-full min-h-[350px] overflow-hidden">
                {isTransforming && (
                  <div className="absolute inset-0 bg-base-100/70 backdrop-blur-xs flex flex-col items-center justify-center gap-2 z-10">
                    <span className="loading loading-bars loading-md text-primary"></span>
                    <span className="text-sm font-medium text-base-content/80">
                      Transforming image...
                    </span>
                  </div>
                )}

                <CldImage
                  width={currentSpecs.width}
                  height={currentSpecs.height}
                  src={uploadedImage}
                  sizes="100vw"
                  alt="Social share transformed visual"
                  crop="fill"
                  aspectRatio={currentSpecs.aspectRatio}
                  gravity="auto"
                  ref={imageRef}
                  onLoad={() => setIsTransforming(false)}
                  className="rounded-lg shadow-md max-h-[500px] w-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-base-300 rounded-box py-16 px-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-base-content/40 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-base-content/60 font-medium">
                Upload an image above to see the real-time social media crop preview.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}