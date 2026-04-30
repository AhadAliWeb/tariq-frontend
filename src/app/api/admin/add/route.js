import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { success: false, error: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        await connectDB();

        const { name, email, password } = await request.json();

        if (!email || !password || !name) {
            return NextResponse.json(
                { success: false, error: "Name, email, and password are all required" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { success: false, error: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }

        const existing = await Admin.findOne({ email });
        if (existing) {
            return NextResponse.json(
                { success: false, error: "An admin with this email already exists" },
                { status: 409 }
            );
        }

        const admin = await Admin.create({ name, email, password });

        return NextResponse.json(
            {
                success: true,
                message: "Admin account created successfully",
                admin: { name: admin.name, email: admin.email },
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}