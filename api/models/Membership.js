import mongoose from "mongoose";

const MembershipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

export default mongoose.model('Membership', MembershipSchema);
