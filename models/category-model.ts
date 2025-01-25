import mongoose, { Document, Schema } from "mongoose";

// Define an interface extending Document to describe the category schema's data structure.
interface ICategory extends Document {
    title: string;
    description?: string; // Optional property
    thumbnail: string;
}

const categorySchema = new Schema<ICategory>({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
    thumbnail: {
        required: true,
        type: String,
    },
});

// Use the model function with generic typing to ensure type safety.
const CategoryModel = mongoose.models.Category as mongoose.Model<ICategory>;
export const Category =
    CategoryModel ??
    mongoose.model<ICategory>("Category", categorySchema);