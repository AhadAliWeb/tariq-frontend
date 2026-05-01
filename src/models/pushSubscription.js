import mongoose from "mongoose";

const PushSubscriptionSchema = new mongoose.Schema(
    {
        endpoint: {
            type: String,
            required: true,
            unique: true,
        },
        keys: {
            p256dh: { type: String, required: true },
            auth: { type: String, required: true },
        },
        // Optional: tag which admin this belongs to
        // adminId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Admin",
        // },
    },
    { timestamps: true }
);

export default mongoose.models.PushSubscription ||
    mongoose.model("PushSubscription", PushSubscriptionSchema);