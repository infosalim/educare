import mongoose, { Connection } from "mongoose";

export async function dbConnect(): Promise<Connection> {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

    // Access the connection from mongoose
    const conn: Connection = mongoose.connection;

    // Optional: Log successful connection
    console.log("Database connected successfully");

    return conn;
  } catch (err) {
    console.error("Database connection error:", err); // Log the error
    throw err; // Re-throw the error to be handled by the caller
  }
}
