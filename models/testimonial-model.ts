import mongoose, { Document, Schema } from "mongoose";

// Define an interface extending Document to describe the testimonial schema's data structure.
interface ITestimonial extends Document {
    content: string;
    user: string;
    courseId: string;
    rating: number;
}

const testimonialSchema = new Schema<ITestimonial>({
    content: {
        required: true,
        type: String,
    },
    user: {
        required: true,
        type: String,
    },
    courseId: {
        required: true,
        type: String,
    },
    rating: {
        required: true,
        type: Number,
    },
});

// Use the model function with generic typing to ensure type safety.
const TestimonialModel = mongoose.models.Testimonial as mongoose.Model<ITestimonial>;
export const Testimonial =
    TestimonialModel ??
    mongoose.model<ITestimonial>("Testimonial", testimonialSchema);