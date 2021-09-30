import mongoose from "mongoose";

const Schema = mongoose.Schema;


const Subjects = new Schema({

    Students:[{
        type:String,
    }],

    ClassID:{
        type:String,
        unique: true,
        required: [true, 'Please provide unique class ID to share with your students'],
    },

    Prof:{
        type:String,
        required: [true, 'Prof name is required to create new classes'],
    },
    anncouncements:
    
    [{ 
        anncouncement_Text: {
            type:String,
        },
        anncouncement_Date:{
            type:String,
        },
        anncouncement_Link:{
           type:String,
        }
    
    }],

})

export const Subject = mongoose.model("subject", Subjects);
