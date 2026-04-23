import mongoose from "mongoose"

const leadFormSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        countryCode: {
            type: String,
            required: true, // change to false if optional
            trim: true,
        },
        country: {
            type: String,
            required: true, // change to false if optional
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.LeadForm || mongoose.model("LeadForm", leadFormSchema)