import {gql} from "apollo-server-express";

export const userTypeDefs=gql`

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
}

input userInput{
    firstName:String
    lastName:String
    email:String
    confirmEmail:String
    Enrolled_classes:[String]
    occupation:String
    phone:String
}


type Query{
    hello: String!
    AllUsers:[User]
    UserLogin(user:loginData):User!
},

type Mutation{
    createUser(user_data:userInput):User!
    deleteUser(id:ID!):String!
    updateUserInfo(user_data:userInput,id:ID!):User!
}

`