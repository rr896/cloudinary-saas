"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Share2,
  Video,
  CheckCircle2,
  Maximize2,
  Zap,
  ArrowRight,
  Play,
  RotateCcw,
  Sliders,
  Download,
  Eye,
  FileCheck,
  TrendingDown
} from "lucide-react";

interface SocialPreset {
  id: string;
  name: string;
  platform: string;
  ratio: string;
  width: number;
  height: number;
  containerClass: string;
  description: string;
}

const socialPresets: SocialPreset[] = [
  {
    id: "ig-sq",
    name: "Square Post",
    platform: "Instagram",
    ratio: "1:1",
    width: 1080,
    height: 1080,
    containerClass: "aspect-square max-w-[280px]",
    description: "Optimal for Instagram feed, carousel slides, and square timeline graphics.",
  },
  {
    id: "ig-port",
    name: "Portrait",
    platform: "Instagram",
    ratio: "4:5",
    width: 1080,
    height: 1350,
    containerClass: "aspect-[4/5] max-w-[260px]",
    description: "Maximizes vertical screen real-estate in mobile feeds for up to 30% more reach.",
  },
  {
    id: "tw-post",
    name: "Feed Post",
    platform: "Twitter / X",
    ratio: "16:9",
    width: 1200,
    height: 675,
    containerClass: "aspect-[16/9] max-w-[340px]",
    description: "Standard cinematic ratio for high-engagement thread and announcement media.",
  },
  {
    id: "tw-hdr",
    name: "Header Banner",
    platform: "Twitter / X",
    ratio: "3:1",
    width: 1500,
    height: 500,
    containerClass: "aspect-[3/1] max-w-[380px]",
    description: "Ultra-wide banner with auto-gravity centering important subject elements.",
  },
  {
    id: "fb-cvr",
    name: "Page Cover",
    platform: "Facebook",
    ratio: "205:78",
    width: 820,
    height: 312,
    containerClass: "aspect-[205/78] max-w-[360px]",
    description: "Pixel-perfect dimensions for business page banners and community group headers.",
  },
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"social" | "video">("social");
  const [selectedSocial, setSelectedSocial] = useState<SocialPreset>(socialPresets[0]);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [compressionView, setCompressionView] = useState<"after" | "split" | "before">("after");

  return (
    <div className="w-full">
      {/* Tab Selectors */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-base-200/80 border border-base-300 shadow-inner">
          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === "social"
                ? "bg-primary text-primary-content shadow-md shadow-primary/25"
                : "text-base-content/70 hover:text-base-content"
            }`}
          >
            <Share2 className="w-4 h-4" />
            Social Media AI Crop
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === "video"
                ? "bg-primary text-primary-content shadow-md shadow-primary/25"
                : "text-base-content/70 hover:text-base-content"
            }`}
          >
            <Video className="w-4 h-4" />
            Video Compression & Teaser
          </button>
        </div>
      </div>

      {/* Tab 1: Social Media AI Resizer */}
      {activeTab === "social" && (
        <div className="card bg-base-100/90 border border-base-300 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-base-300">
            {/* Left Control Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cloudinary Auto-Gravity Engine
                </div>
                <h3 className="text-2xl font-bold text-base-content tracking-tight">
                  Intelligent Multi-Platform Cropping
                </h3>
                <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                  One image automatically recomposed for every channel without cutting off vital content.
                  Cloudinary analyzes faces and focal objects in real-time.
                </p>

                {/* Preset List */}
                <div className="mt-6 space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                    Select Target Format
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {socialPresets.map((preset) => {
                      const isSelected = selectedSocial.id === preset.id;
                      return (
                        <button
                          key={preset.id}
                          onClick={() => setSelectedSocial(preset)}
                          className={`flex items-center justify-between p-3 rounded-xl text-left border transition-all ${
                            isSelected
                              ? "bg-primary/10 border-primary text-primary font-semibold shadow-sm"
                              : "border-base-200 hover:border-base-300 hover:bg-base-200/50 text-base-content/80"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-base-200 text-base-content/70 font-semibold">
                              {preset.ratio}
                            </span>
                            <div>
                              <div className="text-sm">{preset.platform} {preset.name}</div>
                              <div className="text-[11px] text-base-content/50">
                                {preset.width} × {preset.height} px
                              </div>
                            </div>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Transformation Spec Summary */}
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-base-content/60">Transformation Pipeline:</span>
                  <span className="font-mono text-primary font-bold">crop="fill", gravity="auto"</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-base-content/60">Target Dimensions:</span>
                  <span className="font-mono font-medium">{selectedSocial.width} × {selectedSocial.height} px</span>
                </div>
                <div className="text-[11px] text-base-content/60 pt-1 border-t border-base-300/60">
                  {selectedSocial.description}
                </div>
              </div>
            </div>

            {/* Right Interactive Preview Canvas */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col items-center justify-center bg-radial from-base-200/40 via-base-100 to-base-200/60 min-h-[420px]">
              {/* Canvas Header */}
              <div className="w-full flex items-center justify-between mb-4 pb-2 border-b border-base-300/60">
                <div className="flex items-center gap-2 text-xs font-mono text-base-content/70">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                  LIVE AI GRAVITY VIEWPORT
                </div>
                <div className="badge badge-sm badge-outline font-mono">
                  {selectedSocial.ratio} • {selectedSocial.width}x{selectedSocial.height}
                </div>
              </div>

              {/* Dynamic Frame simulation */}
              <div className="w-full flex items-center justify-center p-4 min-h-[300px]">
                <div
                  className={`relative overflow-hidden rounded-2xl border-2 border-primary shadow-2xl transition-all duration-500 ease-out bg-neutral flex items-center justify-center w-full ${selectedSocial.containerClass}`}
                >
                  {/* Visual Subject Representation */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                    alt="AI auto-gravity portrait demonstration"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />

                  {/* AI Focal Tag overlay */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-white font-medium shadow-md border border-white/10">
                    <Sparkles className="w-3 h-3 text-secondary animate-spin" />
                    <span>Focal Lock (Auto-Gravity)</span>
                  </div>

                  {/* Aspect Ratio Badge Overlay */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-primary/90 text-primary-content text-[11px] font-mono font-bold shadow">
                    {selectedSocial.ratio}
                  </div>
                </div>
              </div>

              {/* Simulation Action Bar */}
              <div className="w-full flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-base-300/60 text-xs text-base-content/70">
                <span>⚡ Zero blur artifacts • Instant lossless WebP/PNG</span>
                <div className="flex items-center gap-2">
                  <span className="badge badge-success badge-sm font-semibold">Ready to Export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Video Compression & Hover Teaser */}
      {activeTab === "video" && (
        <div className="card bg-base-100/90 border border-base-300 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-base-300">
            {/* Left Control Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20 mb-3">
                  <TrendingDown className="w-3.5 h-3.5" />
                  Up to 81.3% Bandwidth Reduction
                </div>
                <h3 className="text-2xl font-bold text-base-content tracking-tight">
                  High-Efficiency Video Transcoding
                </h3>
                <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                  Heavy 4K and 1080p uploads up to 70MB are automatically transcoded with modern codecs into lightweight,
                  lossless streams. Plus, dynamic 15s hover snippets preview video content with zero loading lag.
                </p>

                {/* Efficiency Comparison Matrix */}
                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-xl bg-base-200/70 border border-base-200">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-base-content/60">Raw Uploaded Video</span>
                      <span className="text-xs font-mono font-bold text-error">68.4 MB</span>
                    </div>
                    <div className="w-full bg-base-300 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-error h-full rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-primary">Cloudinary Compressed</span>
                      <span className="text-xs font-mono font-bold text-primary">12.8 MB</span>
                    </div>
                    <div className="w-full bg-base-300 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[19%]"></div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-success font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 81.3% Bandwidth Saved
                      </span>
                      <span className="text-[11px] text-base-content/50 font-mono">Neon DB Tracked</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Snippet Transformation callout */}
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-base-content">
                  <Eye className="w-4 h-4 text-secondary" />
                  Cloudinary e_preview Generation:
                </div>
                <code className="block text-[11px] font-mono bg-base-300/80 p-2 rounded text-secondary-content">
                  e_preview:duration_15:max_seg_9:min_seg_dur_1
                </code>
                <p className="text-[11px] text-base-content/60">
                  Segments the video into 9 short micro-clips combined into an instant 15-second teaser that plays on card hover.
                </p>
              </div>
            </div>

            {/* Right Video Card Demo Canvas */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col items-center justify-center bg-radial from-base-200/40 via-base-100 to-base-200/60 min-h-[420px]">
              <div className="w-full max-w-md">
                <div className="text-center mb-3 text-xs text-base-content/60">
                  Hover over the card below to test the dynamic video teaser preview:
                </div>

                {/* Simulated Video Card */}
                <div
                  className="card bg-base-100 border border-base-300 shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden cursor-pointer group"
                  onMouseEnter={() => setIsVideoHovered(true)}
                  onMouseLeave={() => setIsVideoHovered(false)}
                >
                  <figure className="relative aspect-video w-full bg-neutral overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
                      alt="Sample Video Thumbnail"
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isVideoHovered ? "scale-110 blur-xs" : "scale-100"
                      }`}
                    />

                    {/* Hover indicator banner */}
                    {isVideoHovered ? (
                      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex flex-col items-center justify-center text-white gap-2 transition-all">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg animate-pulse">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                        <span className="text-xs font-mono font-bold bg-black/60 px-3 py-1 rounded-full border border-white/20">
                          e_preview: 15s Micro Teaser
                        </span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-2 left-2 badge badge-success badge-sm font-semibold shadow">
                      81% Saved
                    </div>
                    <div className="absolute bottom-2 right-2 badge badge-neutral badge-sm bg-neutral/80 text-neutral-content backdrop-blur-xs font-mono">
                      03:45
                    </div>
                  </figure>

                  <div className="card-body p-4 gap-3">
                    <div>
                      <h4 className="card-title text-base font-bold text-base-content">
                        Product_Launch_Cinematic_Teaser.mp4
                      </h4>
                      <span className="text-xs text-base-content/60">Uploaded 12 mins ago</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-base-200">
                      <div>
                        <span className="text-base-content/50 block text-[10px]">RAW SIZE</span>
                        <span className="font-mono text-base-content/70">68.4 MB</span>
                      </div>
                      <div>
                        <span className="text-primary font-bold block text-[10px]">COMPRESSED</span>
                        <span className="font-mono font-bold text-primary">12.8 MB</span>
                      </div>
                    </div>

                    <div className="card-actions justify-between items-center mt-1">
                      <span className="text-[11px] text-success font-medium flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5" /> Lossless H.264
                      </span>
                      <button className="btn btn-primary btn-xs gap-1">
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
