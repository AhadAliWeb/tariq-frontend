// // export const dynamic = "force-static"


// import connectDB from "@/lib/mongodb"
// import LeadForm from "@/models/leadform"


// export async function POST(req) {
//     try {
//         await connectDB();

//         const { phone, countryCode, country } = await req.json();

//         // Basic validation
//         if (!phone || !countryCode || !country) {
//             return Response.json(
//                 { error: "phone, countryCode, and country are required" },
//                 { status: 400 }
//             );
//         }

//         const leadform = await LeadForm.create({
//             phone,
//             countryCode,
//             country,
//         });

//         console.log("Lead Form: ", leadform);

//         return Response.json(leadform, { status: 201 });
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 });
//     }
// }

// export async function GET(req) {
//     try {
//         await connectDB();


//         const leads = await LeadForm.find()



//         return Response.json(leads, { status: 201 })

//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 400 })
//     }
// }


import connectDB from "@/lib/mongodb";
import LeadForm from "@/models/leadform";
import PushSubscription from "@/models/pushSubscription";
import webpush from "@/lib/webpush";

export async function POST(req) {
    try {
        await connectDB();

        const { phone, countryCode, country } = await req.json();

        // Basic validation
        if (!phone || !countryCode || !country) {
            return Response.json(
                { error: "phone, countryCode, and country are required" },
                { status: 400 }
            );
        }

        const leadform = await LeadForm.create({
            phone,
            countryCode,
            country,
        });

        console.log("Lead Form: ", leadform);

        // ── Push Notifications ──────────────────────────────────────────
        // Fire-and-forget: don't let push failures break the lead creation
        sendLeadNotifications(leadform).catch((err) =>
            console.error("Push notification error:", err)
        );
        // ────────────────────────────────────────────────────────────────

        return Response.json(leadform, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(req) {
    try {
        await connectDB();

        const leads = await LeadForm.find();

        return Response.json(leads, { status: 200 });
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
        body: `${lead.countryCode} ${lead.phone} — ${lead.country}`,
        icon: "/icons/icon-192x192.png", // update path to your icon
        badge: "/icons/badge-72x72.png", // update path to your badge
        data: {
            url: "/admin/leads", // where clicking the notification goes
            leadId: lead._id.toString(),
        },
    });

    const results = await Promise.allSettled(
        subscriptions.map((sub) =>
            webpush.sendNotification(
                { endpoint: sub.endpoint, keys: sub.keys },
                payload
            )
        )
    );

    // Clean up expired / invalid subscriptions (410 Gone)
    const expiredEndpoints = [];
    results.forEach((result, i) => {
        if (
            result.status === "rejected" &&
            (result.reason?.statusCode === 410 ||
                result.reason?.statusCode === 404)
        ) {
            expiredEndpoints.push(subscriptions[i].endpoint);
        }
    });

    if (expiredEndpoints.length) {
        await PushSubscription.deleteMany({ endpoint: { $in: expiredEndpoints } });
        console.log(`Cleaned up ${expiredEndpoints.length} expired push subscription(s)`);
    }
}