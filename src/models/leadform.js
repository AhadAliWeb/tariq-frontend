import mongoose from "mongoose"

const leadFormSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        countryCode: {
            type: String,
            required: true,
            trim: true,
        },
        country: {
            type: String,
            required: true,
            trim: true,
        },
        question: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.LeadForm || mongoose.model("LeadForm", leadFormSchema)