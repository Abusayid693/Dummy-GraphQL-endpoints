import { User } from "../Models/Cat";

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
        return {
          info: "User exits",
          email: email,
        };
      } else {
        return {
          info: "User does not exits",
          email: email,
        };
      }
    },
  },

  /** New user login details */
  Mutation: {
    createCat: async (parent, args, context, info) => {
      const { firstName, lastName, email, confirmEmail, occupation, phone } =
        args.user_data;
      const user = new User({
        firstName,
        lastName,
        email,
        confirmEmail,
        occupation,
        phone,
      });
      await user.save();
      console.log(user);
      return user;
    },
  },
};
