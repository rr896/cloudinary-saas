import React from "react";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import { LandingHeroCTA, LandingBottomCTA } from "@/components/LandingCTA";
import {
  Sparkles,
  Video,
  Share2,
  Zap,
  ShieldCheck,
  Database,
  Layers,
  CheckCircle,
  HelpCircle,
  Clock,
  Download,
  Gauge,
  Cpu,
  UploadCloud,
} from "lucide-react";

export const metadata = {
  title: "CloudMedia AI - Intelligent Video Compression & Social Media Resizer",
  description:
    "Transform, compress, and reformat your media at cloud scale. Powered by Cloudinary AI transformations, Next.js 16, Neon PostgreSQL, and Clerk authentication.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col selection:bg-primary selection:text-primary-content">
      {/* Top Navigation */}
      <LandingNavbar />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-base-200 bg-radial from-primary/5 via-base-100 to-base-100">
          {/* Subtle background glow decorative elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tagline Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-base-200/90 border border-base-300 text-base-content/80 shadow-xs mb-8 animate-fadeIn">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-primary font-bold">CloudMedia 2.0</span>
              <span className="text-base-content/40">•</span>
              <span>Intelligent Media Processing & Social Resizing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-base-content max-w-4xl mx-auto leading-[1.12]">
              Transform, Compress & Adapt Media at{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Cloud Scale
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed font-normal">
              Cut heavy video bandwidth by up to <strong className="text-base-content font-semibold">81%</strong> without losing quality,
              and automatically reformat visuals for Instagram, Twitter, and Facebook with AI auto-gravity detection.
            </p>

            {/* Dynamic CTA Controls */}
            <div className="mt-10">
              <LandingHeroCTA />
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="mt-14 pt-8 border-t border-base-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">81.3%</div>
                <div className="text-xs text-base-content/60 mt-1 font-medium">Bandwidth Saved</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-base-content font-mono">5+ Ratios</div>
                <div className="text-xs text-base-content/60 mt-1 font-medium">Auto-Gravity Cropping</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary font-mono">15 Sec</div>
                <div className="text-xs text-base-content/60 mt-1 font-medium">Hover Video Snippets</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-success font-mono">70 MB</div>
                <div className="text-xs text-base-content/60 mt-1 font-medium">Upload Limit / Video</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE SHOWCASE SECTION ================= */}
        <section id="showcase" className="py-20 sm:py-28 bg-base-200/40 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                <Gauge className="w-3.5 h-3.5" />
                Live Interactive Demonstration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                Experience the Dual Engine in Action
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                Explore how our Cloudinary AI transformations adapt visual assets in real time
                and how our video processing pipeline delivers instant previews without client lag.
              </p>
            </div>

            {/* Interactive Component */}
            <InteractiveShowcase />
          </div>
        </section>

        {/* ================= CORE FEATURES GRID ================= */}
        <section id="features" className="py-20 sm:py-28 bg-base-100 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                <Cpu className="w-3.5 h-3.5" />
                Built for High Performance
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                Everything You Need for Media Automation
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                Tailor-made for creators, marketers, and developers who need instant media optimization without manual video editing tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  AI Auto-Gravity Framing
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Automatically detects faces, focal objects, and key action points. Recomposes horizontal visuals into square or vertical social crops without cutting off crucial content.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  Heavy Video Compression
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Transcodes 4K and 1080p raw video uploads (up to 70MB) into cloud-optimized formats. Reduces bandwidth consumption by 60% to 80% while retaining crisp detail.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  Dynamic 15s Hover Teasers
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Generates Cloudinary <code className="text-xs bg-base-300 px-1 py-0.5 rounded">e_preview</code> snippets automatically. Users can preview 9 key video segments on hover without buffering full files.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-info/10 text-info flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  Multi-Channel Presets
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Pre-configured standard specs for Instagram (1:1 & 4:5), Twitter/X (16:9 & 3:1 Header), and Facebook Covers. Instant lossless PNG downloads.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  Neon DB & Prisma 7 Storage
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Serverless PostgreSQL backend keeps track of every upload, duration, compression ratio, public IDs, and download timestamps with strict type safety.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="card bg-base-200/50 border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-200 p-6 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-warning/10 text-warning flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-base-content mb-2">
                  Enterprise Clerk Security
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Zero-configuration user identity, secure session cookies, multi-session management, and route protection for your personal media dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS (3-STEP WORKFLOW) ================= */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-base-200/40 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-3">
                <Layers className="w-3.5 h-3.5" />
                Streamlined Pipeline
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                How CloudMedia Works in 3 Simple Steps
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                From high-res raw files to multi-channel distribution in under 5 seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="card bg-base-100 border border-base-300 p-8 rounded-2xl shadow-sm relative">
                <div className="text-5xl font-extrabold text-base-content/10 font-mono absolute top-6 right-6">
                  01
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center font-bold mb-4">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">Upload Assets</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Drag and drop any raw image or video file up to 70MB. Our API streams uploads directly to the Cloudinary CDN pipeline with live progress tracking.
                </p>
              </div>

              {/* Step 2 */}
              <div className="card bg-base-100 border border-base-300 p-8 rounded-2xl shadow-sm relative">
                <div className="text-5xl font-extrabold text-base-content/10 font-mono absolute top-6 right-6">
                  02
                </div>
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-content flex items-center justify-center font-bold mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">Automated Transcoding</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Cloudinary applies intelligent auto-gravity AI focal detection or optimizes video compression, calculating exact byte savings stored into Neon PostgreSQL.
                </p>
              </div>

              {/* Step 3 */}
              <div className="card bg-base-100 border border-base-300 p-8 rounded-2xl shadow-sm relative">
                <div className="text-5xl font-extrabold text-base-content/10 font-mono absolute top-6 right-6">
                  03
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent text-accent-content flex items-center justify-center font-bold mb-4">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">Preview & Export</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  Browse your personal media gallery at <code className="font-mono text-xs bg-base-200 px-1 py-0.5 rounded">/home</code>,
                  hover over videos for 15-second teasers, and download ready-to-publish assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK & ARCHITECTURE ================= */}
        <section id="tech-stack" className="py-20 sm:py-28 bg-base-100 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Production-Ready Stack
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                Engineered with Modern Technologies
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                Built on high-concurrency modern frameworks for rock-solid stability, fast edge redirects, and lightning response times.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-sm text-base-content">Next.js 16</span>
                <span className="text-[11px] text-base-content/60 mt-1">App Router + Proxy</span>
              </div>
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-primary">Cloudinary</span>
                <span className="text-[11px] text-base-content/60 mt-1">AI Media Pipelines</span>
              </div>
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-secondary">Clerk</span>
                <span className="text-[11px] text-base-content/60 mt-1">Identity & Auth</span>
              </div>
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-accent">Neon DB</span>
                <span className="text-[11px] text-base-content/60 mt-1">Serverless Postgres</span>
              </div>
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-success">Prisma 7</span>
                <span className="text-[11px] text-base-content/60 mt-1">Type-Safe ORM</span>
              </div>
              <div className="p-4 rounded-xl bg-base-200/60 border border-base-300 text-center flex flex-col items-center justify-center">
                <span className="font-mono font-bold text-info">Tailwind v4</span>
                <span className="text-[11px] text-base-content/60 mt-1">DaisyUI System</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING TIERS ================= */}
        <section id="pricing" className="py-20 sm:py-28 bg-base-200/40 border-b border-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20 mb-3">
                <Zap className="w-3.5 h-3.5" />
                Simple & Transparent
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                Plans for Creators and Growing Teams
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                Start for free with zero setup fees. Scale as your media library and audience expand.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Starter Tier */}
              <div className="card bg-base-100 border border-base-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-base-content">Free Starter</div>
                  <p className="text-xs text-base-content/60 mt-1">For casual creators and trial tests</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-base-content font-mono">$0</span>
                    <span className="text-xs text-base-content/60">/ month</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-base-content/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      5 AI Auto-Gravity crops per day
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Up to 35MB video upload limit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      15-second hover teaser preview
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Standard Clerk authentication
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/sign-up"
                    className="btn btn-outline btn-block"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>

              {/* Creator Pro Tier */}
              <div className="card bg-base-100 border-2 border-primary p-8 rounded-2xl shadow-xl flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge badge-primary font-semibold text-xs px-3 py-2 shadow-md">
                  MOST POPULAR
                </div>
                <div>
                  <div className="text-lg font-bold text-base-content">Creator Pro</div>
                  <p className="text-xs text-base-content/60 mt-1">For professional content creators & agencies</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-primary font-mono">$19</span>
                    <span className="text-xs text-base-content/60">/ month</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-base-content/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Unlimited AI Social Media Resizing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Full 70MB video upload allowance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Up to 81%+ lossless compression
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Instant 1-click multi-format downloads
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Unlimited Neon DB catalog history
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/sign-up"
                    className="btn btn-primary btn-block shadow-md shadow-primary/25"
                  >
                    Upgrade to Pro
                  </Link>
                </div>
              </div>

              {/* Team / Enterprise Tier */}
              <div className="card bg-base-100 border border-base-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-base-content">Enterprise</div>
                  <p className="text-xs text-base-content/60 mt-1">For digital agencies and media platforms</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-base-content font-mono">$79</span>
                    <span className="text-xs text-base-content/60">/ month</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-base-content/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Dedicated Cloudinary CDN sub-account
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Up to 500MB video uploads
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Custom transformation presets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Direct REST API & Webhook triggers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Priority 24/7 technical support
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/sign-up"
                    className="btn btn-outline btn-block"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
        <section id="faq" className="py-20 sm:py-28 bg-base-100 border-b border-base-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-base-200 text-base-content/70 border border-base-300 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                Got Questions?
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-base text-base-content/70">
                Everything you need to know about our media processing algorithms and storage.
              </p>
            </div>

            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-200/60 border border-base-300 rounded-xl">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-base font-bold text-base-content">
                  What is the maximum video upload size supported?
                </div>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">
                  Our standard video upload accepts up to 70 MB video files in MP4, MOV, and AVI formats. Files are streamed with live chunk progress tracking and converted into high-efficiency web streams.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200/60 border border-base-300 rounded-xl">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-bold text-base-content">
                  How does the AI Auto-Gravity social crop work?
                </div>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">
                  We leverage Cloudinary's intelligent auto-gravity transformation (<code className="font-mono text-xs">gravity="auto", crop="fill"</code>). The machine learning model identifies faces, prominent subjects, and motion centers in your visual and centers them inside the requested aspect ratio (e.g. 1:1, 4:5, 16:9) without manual cropping.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200/60 border border-base-300 rounded-xl">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-bold text-base-content">
                  What is the difference between the root (/) page and (/home)?
                </div>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">
                  The root page (<code className="font-mono text-xs">/</code>) is our public SaaS landing page describing the product features, interactive demos, and pricing. Once you log in through Clerk, you can access your personal dashboard at <code className="font-mono text-xs">/home</code> to browse your video catalog, upload new videos, or use the Social Resizer.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200/60 border border-base-300 rounded-xl">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-bold text-base-content">
                  How do hover video teasers save bandwidth?
                </div>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">
                  Instead of loading the entire video file whenever a user hovers over a video card, Cloudinary creates a lightweight 15-second teaser clip (<code className="font-mono text-xs">e_preview</code>) composed of 9 micro-segments. This consumes under 1MB of bandwidth while providing a full preview of the video contents.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-200/60 border border-base-300 rounded-xl">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-base font-bold text-base-content">
                  Where is my video metadata stored?
                </div>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">
                  Video media files and transformations are hosted globally via Cloudinary CDN, while all metadata (original file size, compressed size, duration, user ownership, and title) is safely stored in our Neon PostgreSQL serverless database managed by Prisma 7.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CLOSING CALL TO ACTION BANNER ================= */}
        <section className="py-20 sm:py-24 bg-gradient-to-tr from-primary/10 via-base-100 to-secondary/10 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-base-content">
              Ready to Supercharge Your Media Workflow?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Join content creators and digital marketing teams automating video compression and multi-channel social resizing today.
            </p>

            <div className="mt-8">
              <LandingBottomCTA />
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-base-300 bg-base-200/50 py-12 text-sm text-base-content/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-bold text-base text-base-content">
                CloudMedia AI
              </span>
              <span className="text-xs text-base-content/40">• Next-Gen Media Automation</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs">
              <a href="#features" className="hover:text-primary transition">Features</a>
              <a href="#showcase" className="hover:text-primary transition">Interactive Demo</a>
              <a href="#how-it-works" className="hover:text-primary transition">Workflow</a>
              <a href="#tech-stack" className="hover:text-primary transition">Stack</a>
              <a href="#pricing" className="hover:text-primary transition">Pricing</a>
              <a href="#faq" className="hover:text-primary transition">FAQ</a>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-base-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/50">
            <p>© {new Date().getFullYear()} CloudMedia AI. Powered by Cloudinary, Clerk, and Neon PostgreSQL.</p>
            <div className="flex items-center gap-4">
              <Link href="/home" className="hover:underline">Dashboard</Link>
              <Link href="/social-share" className="hover:underline">Social Resizer</Link>
              <Link href="/video-upload" className="hover:underline">Video Upload</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
