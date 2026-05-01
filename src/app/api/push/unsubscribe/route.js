import connectDB from "@/lib/mongodb";
import PushSubscription from "@/models/pushSubscription";

export async function POST(req) {
    try {
        await connectDB();

        const { endpoint } = await req.json();

        if (!endpoint) {
            return Response.json({ error: "endpoint is required" }, { status: 400 });
        }

        await PushSubscription.deleteOne({ endpoint });

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}