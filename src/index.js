import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./typeDefs/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import express from "express";
import mongoose from "mongoose";

const app = express();


async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
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
