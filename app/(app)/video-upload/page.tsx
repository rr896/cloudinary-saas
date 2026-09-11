"use client";

import React, { useState } from "react";
import axios, { AxiosProgressEvent } from "axios";
import { useRouter } from "next/navigation";

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [notification, setNotification] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const router = useRouter();

  // Max file size: 70 MB
  const MAX_FILE_SIZE = 70 * 1024 * 1024;

  const showNotification = (type: "error" | "success", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      showNotification("error", "File size exceeds the 70MB limit.");
      e.target.value = "";
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      showNotification("error", "Please select a video file to upload.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      showNotification("error", "File size exceeds the 70MB limit.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("originalSize", file.size.toString());

    try {
      const response = await axios.post("/api/video-upload", formData, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        },
      });

      if (response.status === 200 || response.status === 201) {
        showNotification("success", "Video uploaded successfully!");
        // Reset form
        setTitle("");
        setDescription("");
        setFile(null);
        // Optional redirect (e.g., router.push("/home"))
      }
    } catch (error) {
      console.error(error);
      showNotification("error", "Failed to upload video. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
      {/* Toast Notification Alert */}
      {notification && (
        <div className="toast toast-top toast-end z-50">
          <div
            className={`alert ${
              notification.type === "error" ? "alert-error" : "alert-success"
            } shadow-lg`}
          >
            <span>{notification.message}</span>
            <button
              onClick={() => setNotification(null)}
              className="btn btn-ghost btn-xs btn-circle"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-2">Upload Video</h2>
          <p className="text-sm text-base-content/70 mb-4">
            Upload videos up to 70 MB for processing and publishing.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Give your video a title"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isUploading}
                required
              />
            </div>

            {/* Description Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                placeholder="Add a brief description"
                className="textarea textarea-bordered h-24 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isUploading}
              />
            </div>

            {/* File Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Video File</span>
                <span className="label-text-alt text-base-content/60">Max 70MB</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                disabled={isUploading}
                className="file-input file-input-bordered file-input-primary w-full"
                required
              />
            </div>

            {/* Local Video Preview */}
            {file && (
              <div className="mt-4">
                <label className="label">
                  <span className="label-text font-semibold">Selected Video Preview</span>
                </label>
                <div className="rounded-box overflow-hidden border border-base-300 bg-base-200">
                  <video
                    src={URL.createObjectURL(file)}
                    controls
                    className="w-full max-h-64 object-contain"
                  />
                </div>
              </div>
            )}

            {/* Progress Bar */}
            {isUploading && (
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-medium text-base-content/70">
                  <span>Uploading video...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value={uploadProgress}
                  max="100"
                ></progress>
              </div>
            )}

            {/* Submit Button */}
            <div className="card-actions justify-end pt-4">
              <button
                type="submit"
                disabled={isUploading || !file}
                className="btn btn-primary w-full sm:w-auto"
              >
                {isUploading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Uploading ({uploadProgress}%)
                  </>
                ) : (
                  "Upload Video"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}