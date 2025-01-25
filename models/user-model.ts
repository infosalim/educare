import mongoose, { Document, Schema } from "mongoose";

// Define an interface extending Document to describe the user schema's data structure.
interface IUser extends Document {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phone: string;
    role: string;
    bio?: string; // Optional field
    socialMedia?: { [key: string]: string }; // Optional field with any object keys
    profilePicture?: string; // Optional field
}

const userSchema = new Schema<IUser>({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    role: {
        required: true,
        type: String,
    },
    bio: {
        required: false,
        type: String,
    },
    socialMedia: {
        required: false,
        type: mongoose.Schema.Types.Mixed, // Use Schema.Types.Mixed for dynamic keys
    },
    profilePicture: {
        required: false,
        type: String,
    },
});

// Use the model function with generic typing to ensure type safety.
const UserModel = mongoose.models.User as mongoose.Model<IUser>;
export const User =
    UserModel ??
    mongoose.model<IUser>("User", userSchema);