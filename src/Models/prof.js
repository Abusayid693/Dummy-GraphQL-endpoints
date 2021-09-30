import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
  name: {
    type: String,
    required: [true, "User First-name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User email required"],
  },

  confirmEmail: {
    type: String,
    required: [true, "User confirm-email required"],
  },
  Enrolled_classes: [
    {
      type: String,
      unique: true,
    },
  ],

  Office_hours:
  [{ 
      Day: {
          type:String,
      },
      Time:{
          type:String,
      },
      Empty:{
         type:Number,
      }
  
  }],


});

export const Professor = mongoose.model("prof", ProfessorSchema);