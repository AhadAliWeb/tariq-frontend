import connectDB from "@/lib/mongodb";
import PushSubscription from "@/models/pushSubscription";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        const { endpoint, keys } = await req.json();

        if (!endpoint || !keys?.p256dh || !keys?.auth) {
            return Response.json(
                { error: "endpoint, keys.p256dh, and keys.auth are required" },
                { status: 400 }
            );
        }

        // Upsert so re-subscribing on the same device doesn't duplicate
        const subscription = await PushSubscription.findOneAndUpdate(
            { endpoint },
            {
                endpoint,
                keys,
                adminId: session.user.id,
            },
            { upsert: true, new: true }
        );

        return Response.json({ success: true, subscription }, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}