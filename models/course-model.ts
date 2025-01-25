import mongoose, { Schema, Document } from "mongoose";

interface ICourse extends Document {
  title: string;
  description: string;
  thumbnail: string;
  modules: Schema.Types.ObjectId[];
  price: number;
  active: boolean;
  category: Schema.Types.ObjectId;
  instructor: Schema.Types.ObjectId;
  quizzes?: Schema.Types.ObjectId;
  testimonials: Schema.Types.ObjectId[];
}

const courseSchema: Schema<ICourse> = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: [
    { type: Schema.Types.ObjectId, ref: "Module" }
  ],
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  quizzes: {
    required: false,
    type: Schema.Types.ObjectId,
  },

  testimonials: [
    {
      type: Schema.Types.ObjectId,
      ref: "Testimonial",
    },
  ],
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);