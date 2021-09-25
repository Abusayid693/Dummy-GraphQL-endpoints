import {gql} from "apollo-server-express";

export const typeDefs=gql`

type Login{
    info:String!
    email:String!
}
input loginData{
    email:String!
}

type User{
    id:ID!
    firstName:String!
    lastName:String!
    email:String!
    confirmEmail:String!
    occupation:String!
    phone:String!

},
type Query{
    hello: String!
    AllUsers:[User]
    UserLogin(user:loginData):Login!
},

input userInput{
    firstName:String!
    lastName:String!
    email:String!
    confirmEmail:String!
    occupation:String!
    phone:String!
}

type Mutation{
    createCat(user_data:userInput):User!
}
`
/** 
 * Remember if you use old database that contains seperate schema and model then it will throw error
query{
 AllCats{
    id
    firstName
    email
    confirmEmail
    occupation
    phone
  }
}
*/

/** 
mutation {
  createCat(cat: {
    firstName:"Rehan"
    lastName:"Chy"
    email:"abu"
    confirmEmail:"dkjb"
    occupation:"dfkn"
    phone:"dnkjdbec"
    
  }) {
    id
    firstName
    email
    confirmEmail
    occupation
    phone
  }
}
 */