import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // password: {
  //     type: String,
  //     required: true,
  // },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const ClerkUser =
  mongoose.models.ClerkUser || mongoose.model("ClerkUser", UserSchema);

export default ClerkUser;
