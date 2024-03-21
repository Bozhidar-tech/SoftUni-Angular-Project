import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
         isAdmin: {
            type: Boolean,
            default: false
         },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);