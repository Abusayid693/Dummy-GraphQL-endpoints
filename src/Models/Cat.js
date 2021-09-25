import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CatSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  confirmEmail: {
    type: String,
    required: true,
  },
  occupation:{
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  }
});

// export const Cat = mongoose.model("Cat", CatSchema)
export const User = mongoose.model("user", CatSchema);
