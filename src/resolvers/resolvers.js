import { User } from "../Models/user";
import {Subject} from "../Models/classes"

export const resolvers = {
  Query: {
    hello: () => "hi",

    AllUsers: async () => {
      const users = await User.find();
      return users;
    },

    /** Checking user login details */
    UserLogin: async (parent, args, context, info) => {
      const { email } = args.user;
      const users = await User.findOne({ email });

      if (users) {
        return users
      } else {
        throw new Error("User does not exits");
      }
    },

    AllSubjects: async ()=>{

      const sub= await Subject.find();

      return sub 
    }
  },

  /** New user login details */
  Mutation: {
    /**
     * 
     * @param {*} parent 
     * @param {*} args 
     * @param {*} context 
     * @param {*} info 
     * @returns 
     */
    createUser: async (parent, args, context, info) => {
      const { firstName, lastName, email, Enrolled_classes,confirmEmail, occupation, phone } =
        args.user_data;

      // Check if user already exists
      const userExist = await User.findOne({ email });

      if (userExist) {
        throw new Error("User already exists");
      }

      const user = new User({
        firstName,
        lastName,
        Enrolled_classes,
        email,
        confirmEmail,
        occupation,
        phone,
      });
      await user.save();
      console.log(user);
      return user;
    },

    /** User info deletion
     * 
     * @param {*} parent 
     * @param {*} args 
     * @param {*} context 
     * @param {*} info 
     * @returns 
     */
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;
      const userExist = await User.findById(id);

      if (userExist) {
        try {
          await User.findByIdAndRemove(id);
        } catch {
          console.log("Error in user deletation");
          throw new Error("Error in user deletation");
        }

        return "User removed";
      } else {
        throw new Error("User does not exist or wrong ID");
      }
    },
/**
 * MUTATION TO UPDATE USER INFO
 * @param {*} parent 
 * @param {*} args 
 * @param {*} context 
 * @param {*} info 
 * @returns User updated info or throws error in case of any .....
 */
    updateUserInfo: async (parent, args, context, info) => {
      const { id } = args;
      const { firstName, lastName, email, confirmEmail, occupation, phone } =
        args.user_data;

      try {
        const user = await User.findByIdAndUpdate(
          id,
          {
            firstName,
            lastName,
            email,
            confirmEmail,
            occupation,
            phone,
          },
          { new: true }
        );

        return user;
      } catch {
        throw new Error("Error in user info updation");
      }
    },


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
    }
  },
};
