import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';


const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/signup(.*)",
    "/",
])

const isAuthRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/signup(.*)",
])

const isPublicApiRoute = createRouteMatcher([
    "/api/videos"
])

export default clerkMiddleware(async (auth, req) => {

    // Add your middleware checks
    const { userId } = await auth();
    const curretUrl = new URL(req.url);
    const isApiRequest = curretUrl.pathname.startsWith("/api")

    // If user is logged in and visits auth pages, redirect to dashboard
    if (userId && isAuthRoute(req)) {
        return NextResponse.redirect(new URL("/home", req.url))
    }

    // If user is not logged in and trying to access a protected route
    if (!userId) {
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }

        // If the request is for a protected API and the user is not logged in
        if (isApiRequest && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }
    }
    
    return NextResponse.next()

  },

//   { debug: true },

)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',
  ],
}