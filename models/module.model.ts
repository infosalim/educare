import mongoose, { Document, Schema } from "mongoose";

// Define an interface extending Document to describe the module schema's data structure.
interface IModule extends Document {
    title: string;
    description: string;
    status: string;
    slug: string;
    course: string;
    lessonIds: string[];
}

const moduleSchema = new Schema<IModule>({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    status: {
        required: true,
        type: String,
    },
    slug: {
        required: true,
        type: String,
    },
    course: {
        required: true,
        type: String,
    },
    lessonIds: {
        required: true,
        type: [String],
    },
});

// Use the model function with generic typing to ensure type safety.
const ModuleModel = mongoose.models.Module as mongoose.Model<IModule>;
export const Module =
    ModuleModel ??
    mongoose.model<IModule>("Module", moduleSchema);