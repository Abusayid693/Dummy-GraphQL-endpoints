import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "User First-name is required"],
  },
  lastName: {
    type: String,
    required: [true, "User last-name required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User email required"],
  },

  confirmEmail: {
    type: String,
    unique: true,
    required: [true, "User confirm-email required"],
  },
  occupation: {
    type: String,
    required: [true, "User occupation required required"],
  },
  Enrolled_classes: [
    {
      type: String,
      unique: true,
    },
  ],
  phone: {
    type: String,
    unique: true,
    required: [true, "User phone number required"],
  },
});

export const User = mongoose.model("user", UserSchema);
