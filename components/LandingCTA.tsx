"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Sparkles, ArrowRight, Layers, Share2, Video } from "lucide-react";

export function LandingHeroCTA() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center gap-4 h-13">
        <div className="w-48 h-12 bg-base-200 animate-pulse rounded-xl" />
        <div className="w-36 h-12 bg-base-200 animate-pulse rounded-xl hidden sm:block" />
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/home"
          className="btn btn-primary btn-lg h-13 px-8 gap-3 font-semibold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all w-full sm:w-auto"
        >
          <Layers className="h-5 w-5" />
          Open Media Dashboard
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          href="/social-share"
          className="btn btn-outline btn-lg h-13 px-6 gap-2 border-base-300 hover:bg-base-200 text-base-content font-medium w-full sm:w-auto"
        >
          <Share2 className="h-5 w-5 text-primary" />
          Social Resizer
        </Link>
        <Link
          href="/video-upload"
          className="btn btn-ghost btn-lg h-13 px-6 gap-2 hover:bg-base-200 text-base-content font-medium w-full sm:w-auto"
        >
          <Video className="h-5 w-5 text-secondary" />
          Upload Video
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/sign-up"
        className="btn btn-primary btn-lg h-13 px-8 gap-3 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all w-full sm:w-auto"
      >
        <Sparkles className="h-5 w-5" />
        Start Building Free
        <ArrowRight className="h-5 w-5" />
      </Link>
      <Link
        href="/sign-in"
        className="btn btn-outline btn-lg h-13 px-7 border-base-300 hover:bg-base-200 text-base-content font-medium w-full sm:w-auto"
      >
        Sign In to Studio
      </Link>
    </div>
  );
}

export function LandingBottomCTA() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-13">
        <div className="w-48 h-12 bg-base-200 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/home"
          className="btn btn-primary btn-lg h-13 px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all w-full sm:w-auto"
        >
          <Layers className="w-5 h-5" />
          Launch Media Dashboard
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/sign-up"
        className="btn btn-primary btn-lg h-13 px-8 gap-2 font-semibold shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all w-full sm:w-auto"
      >
        <Sparkles className="w-5 h-5" />
        Create Free Account
        <ArrowRight className="w-5 h-5" />
      </Link>
      <Link
        href="/sign-in"
        className="btn btn-outline btn-lg h-13 px-7 border-base-300 text-base-content w-full sm:w-auto"
      >
        Sign In
      </Link>
    </div>
  );
}
