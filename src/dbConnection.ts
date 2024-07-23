import mongoose, { Mongoose } from "mongoose";

// fetch a cached version of mongodb request
interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  cached.promise =
    cached.promise ||
    mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "clerkauthv5",
      bufferCommands: false,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
