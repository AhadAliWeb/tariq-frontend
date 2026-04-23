import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/admin";


console.log('NEXT AUTH secret: ', process.env.NEXTAUTH_SECRET);


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                await connectDB();

                const admin = await Admin.findOne({ email: credentials.email });
                if (!admin) {
                    throw new Error("Invalid email or password");
                }

                const isValid = await admin.comparePassword(credentials.password);
                if (!isValid) {
                    throw new Error("Invalid email or password");
                }

                return {
                    id: admin._id.toString(),
                    email: admin.email,
                    name: admin.name,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
