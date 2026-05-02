import connectDB from "@/lib/mongodb";
import LeadForm from "@/models/leadform";
import PushSubscription from "@/models/pushSubscription";
import webpush from "@/lib/webpush";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        await connectDB();

        const { phone, countryCode, country } = await req.json();

        if (!phone || !countryCode || !country) {
            return Response.json(
                { error: "phone, countryCode, and country are required" },
                { status: 400 }
            );
        }

        const leadform = await LeadForm.create({ phone, countryCode, country });

        sendLeadNotifications(leadform).catch((err) =>
            console.error("Push notification error:", err)
        );

        return Response.json(leadform, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

// export async function GET(req) {
//     try {
//         await connectDB();

//         const { searchParams } = new URL(req.url);
//         const search = searchParams.get("search")?.trim() || "";
//         const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
//         const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "10", 10)));
//         const skip = (page - 1) * limit;

//         // Build filter
//         const filter = search
//             ? {
//                 $or: [
//                     { phone: { $regex: search, $options: "i" } },
//                     { country: { $regex: search, $options: "i" } },
//                     { countryCode: { $regex: search, $options: "i" } },
//                 ],
//             }
//             : {};

//         const [leads, total] = await Promise.all([
//             LeadForm.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
//             LeadForm.countDocuments(filter),
//         ]);

//         return Response.json(
//             {
//                 leads,
//                 pagination: {
//                     total,
//                     page,
//                     limit,
//                     totalPages: Math.ceil(total / limit),
//                 },
//             },
//             { status: 200 }
//         );
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search")?.trim() || "";
        const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
        const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "10", 10)));
        const skip = (page - 1) * limit;

        const filter = search
            ? {
                $or: [
                    { phone: { $regex: search, $options: "i" } },
                    { country: { $regex: search, $options: "i" } },
                    { countryCode: { $regex: search, $options: "i" } },
                ],
            }
            : {};

        const [leads, total] = await Promise.all([
            LeadForm.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
            LeadForm.countDocuments(filter),
        ]);

        return Response.json(
            {
                leads,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return Response.json({ error: "Lead ID is required" }, { status: 400 });
        }

        const deleted = await LeadForm.findByIdAndDelete(id);

        if (!deleted) {
            return Response.json({ error: "Lead not found" }, { status: 404 });
        }

        return Response.json({ message: "Lead deleted successfully" }, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

// ── Helper ────────────────────────────────────────────────────────────────────

async function sendLeadNotifications(lead) {
    const subscriptions = await PushSubscription.find({});
    if (!subscriptions.length) return;

    const payload = JSON.stringify({
        title: "📥 New Lead!",
        body: `${lead.phone} — ${lead.country}`,
        icon: "/images/notification.png",
        badge: "/images/logo.png",
        data: {
            url: "/admin/leads",
            leadId: lead._id.toString(),
        },
    });

    const results = await Promise.allSettled(
        subscriptions.map((sub) =>
            webpush.sendNotification({ endpoint: sub.endpoint, keys: sub.keys }, payload)
        )
    );

    const expiredEndpoints = [];
    results.forEach((result, i) => {
        if (
            result.status === "rejected" &&
            (result.reason?.statusCode === 410 || result.reason?.statusCode === 404)
        ) {
            expiredEndpoints.push(subscriptions[i].endpoint);
        }
    });

    if (expiredEndpoints.length) {
        await PushSubscription.deleteMany({ endpoint: { $in: expiredEndpoints } });
        console.log(`Cleaned up ${expiredEndpoints.length} expired push subscription(s)`);
    }
}