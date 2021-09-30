import {Professor} from "../Models/prof"

export const profResolvers = {
  Query: {
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

     professorRegistration: async (parent, args, context, info)=>{
        const {name,email,confirmEmail,Enrolled_classes,Office_hours}=args.user_data
  
        console.log(args.user_data)
        return args.user_data
      }
  },
};
