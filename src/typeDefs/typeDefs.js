import {gql} from "apollo-server-express";

export const typeDefs=gql`

input loginData{
    email:String!
}

type User{
    id:ID!
    firstName:String!
    lastName:String!
    email:String!
    confirmEmail:String!
    Enrolled_classes:[String]
    occupation:String!
    phone:String!

},

type anncouncement_list_view{
  anncouncement_Text:String
  anncouncement_Date:String
  anncouncement_Link:String
},

type my_classes_view{
  Students:[String]
  Prof:String
  ClassID:String
  anncouncements:[anncouncement_list_view]
}


type Query{
    hello: String!
    AllUsers:[User]
    AllSubjects:[my_classes_view]
    UserLogin(user:loginData):User!
},

input userInput{
    firstName:String
    lastName:String
    email:String
    confirmEmail:String
    Enrolled_classes:[String]
    occupation:String
    phone:String
},

input anncouncement_list{
  anncouncement_Text:String
  anncouncement_Date:String
  anncouncement_Link:String

},

input Classes{
  Students:[String]
  Prof:String
  ClassID:String
  anncouncements:[anncouncement_list]
}

type Mutation{
    createUser(user_data:userInput):User!
    deleteUser(id:ID!):String!
    updateUserInfo(user_data:userInput,id:ID!):User!

    createSubjects(sub_data:Classes):String
    enrollInNewClass(id:String!,ClassID:String):String
}
`









