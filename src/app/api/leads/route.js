// export const dynamic = "force-static"


import connectDB from "@/lib/mongodb"
import LeadForm from "@/models/leadform"


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

        return Response.json(leadform, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(req) {
    try {
        await connectDB();


        const leads = await LeadForm.find()



        return Response.json(leads, { status: 201 })

    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 })
    }
}