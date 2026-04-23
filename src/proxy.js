import nextAuthMiddleware from "next-auth/middleware";

export default function proxy(req, event) {
    return nextAuthMiddleware(req, event);
}

export const config = {
    matcher: ["/admin/:path*"],
};