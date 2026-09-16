"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { Sparkles, ArrowRight, Menu, X, Layers } from "lucide-react";

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300/60 bg-base-100/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary text-primary-content shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-base-content flex items-center gap-1.5">
                CloudMedia <span className="text-primary font-mono text-xs px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">AI</span>
              </span>
              <span className="text-[10px] text-base-content/60 -mt-1 font-medium tracking-wide">
                Smart Media Automation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-base-content/80">
            <a href="#features" className="transition hover:text-primary">
              Features
            </a>
            <a href="#showcase" className="transition hover:text-primary">
              Interactive Demo
            </a>
            <a href="#how-it-works" className="transition hover:text-primary">
              Workflow
            </a>
            <a href="#tech-stack" className="transition hover:text-primary">
              Architecture
            </a>
            <a href="#pricing" className="transition hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-primary">
              FAQ
            </a>
          </nav>

          {/* Auth Controls */}
          <div className="hidden md:flex items-center gap-3">
            {isLoaded ? (
              isSignedIn ? (
                <>
                  <Link
                    href="/home"
                    className="btn btn-primary btn-sm gap-2 shadow-sm font-medium"
                  >
                    <Layers className="h-4 w-4" />
                    Go to Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="flex items-center pl-2 border-l border-base-300">
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-9 h-9 border border-primary/30",
                        },
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="btn btn-ghost btn-sm text-sm font-medium hover:bg-base-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="btn btn-primary btn-sm gap-1.5 shadow-md shadow-primary/25 hover:shadow-primary/40 font-semibold"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              )
            ) : (
              <div className="w-24 h-8 bg-base-200 animate-pulse rounded-lg" />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {isLoaded && isSignedIn && (
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  },
                }}
              />
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-sm btn-square"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-base-300 bg-base-100 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-base-200 transition"
            >
              Features
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-base-200 transition"
            >
              Interactive Demo
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-base-200 transition"
            >
              Workflow
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-base-200 transition"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-base-200 transition"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-base-200 flex flex-col gap-2">
            {isLoaded && isSignedIn ? (
              <Link
                href="/home"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary btn-sm w-full gap-2"
              >
                <Layers className="h-4 w-4" />
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-outline btn-sm w-full"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary btn-sm w-full gap-2"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
