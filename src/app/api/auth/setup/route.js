import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin";
import { NextResponse } from "next/server";

// POST /api/auth/setup  — run once to create the admin account
// Protected by a setup secret so it can't be abused after first use
export async function POST(request) {
    try {
        const setupSecret = request.headers.get("x-setup-secret");

        if (setupSecret !== process.env.SETUP_SECRET) {
            return NextResponse.json(
                { success: false, error: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();

        const existingAdmin = await Admin.findOne({});
        if (existingAdmin) {
            return NextResponse.json(
                { success: false, error: "Admin account already exists" },
                { status: 409 }
            );
        }

        const body = await request.json();
        const { email, password, name } = body;

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: "Email and password are required" },
                { status: 400 }
            );
        }

        const admin = await Admin.create({ email, password, name: name || "Admin" });

        return NextResponse.json({
            success: true,
            message: "Admin account created successfully",
            admin: { email: admin.email, name: admin.name },
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
