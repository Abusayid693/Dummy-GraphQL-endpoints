import {Subject} from "../Models/classes"

export const ClassesResolvers = {
  Query: {

    AllSubjects: async ()=>{

      const sub= await Subject.find();

      return sub 
    }
  },

  /** New user login details */
  Mutation: {
/**
 * MUTATION FOR CREATING CLASSROOMS
 * @param {*} parent 
 * @param {*} args 
 * @param {*} context 
 * @param {*} info 
 * @returns Mutation Success or error if thorwn
 */


    createSubjects: async (parent, args, context, info)=>{
      const {Students,ClassID,Prof,anncouncements}=args.sub_data

      const subject = new Subject({
        Students,
        Prof,
        ClassID,
        anncouncements
      });

       await subject.save();

      console.log(anncouncements)
      return "Success"
    },

    /**
     * MUTATIOON FOR ENROLLING NEW USER IN CLASSROOM
     * TASK : 1. Enrolls user in new classroom and add ClassID in user schema --user.Enrolled_classes[i]--- array.
     *        2. Add new enrolled user id in --Subject.Students[i]---- array
     * @param {*} parent 
     * @param {*} args 
     * @param {*} context 
     * @param {*} info 
     * @returns user's enrolled classes list or throws error if any ......
     */

    enrollInNewClass: async (parent, args, context, info)=>{

      const {id,ClassID}=args
      
      const user = await User.findById(id);
      const classes =  await Subject.findOne({ ClassID });

     if (user && classes){
      user.Enrolled_classes.push()
      classes.Students.push(user.id)
     }
     else{
      throw new Error("Please enter a valid class id");
     }
      console.log("User :",user.Enrolled_classes,"\nClass-room :",classes.Students)
      return "ujhgj"
    },


    /**
     * 
     * @param {*} parent 
     * @param {*} args 
     * @param {*} context 
     * @param {*} info 
     */

    professorRegistration: async (parent, args, context, info)=>{
      const {name,email,confirmEmail,Enrolled_classes,Office_hours}=args.user_data

      console.log(args.user_data)
      return args.user_data
    }
  },
};



