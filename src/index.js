import express from "express";
import mongoose from "mongoose";
/**
 * @importing GraphQL and Apollo Server
*/
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
/**
 * @importing All typedefs
*/
import { typeDefs } from "./typeDefs/typeDefs";
import {userTypeDefs} from "./typeDefs/userTypeDefs"
import {classesTypeDefs} from "./typeDefs/classesTypeDefs"
/**
 * @importing All Resolvers 
*/
import { ClassesResolvers } from "./resolvers/ClassesResolvers";
import {userResolvers} from "./resolvers/userResolvers"
import {profResolvers} from "./resolvers/profResolvers"


const app = express();


const resolvers = {
  Query: Object.assign({}, ClassesResolvers.Query, userResolvers.Query,profResolvers.Query),
  Mutation: Object.assign({}, ClassesResolvers.Mutation, userResolvers.Mutation,profResolvers.Mutation)
}

async function startApolloServer(typeDefs, resolvers) {
  
  const server = new ApolloServer({
    typeDefs:[typeDefs,userTypeDefs,classesTypeDefs],
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });


try {
  await mongoose.connect(
    "mongodb://localhost/test41",
    { useUnifiedTopology: true },
    { useNewUrlParser: true }
  )} catch{
      console.log("MongoDB connection error")
  }

  await server.start();
  server.applyMiddleware({ app });
  console.log(`🚀 Server ready at 4000`);
}

startApolloServer(typeDefs, resolvers);

mongoose.connection.on("connected", () => {
    console.log("Database successfully connected");
  });

app.listen({ port: 4000 }, () => console.log("Server running on 4000"));
