if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import { Server, ServerCredentials } from "grpc";
import { SubscriptionService } from "../proto/subscription/subscription_grpc_pb";
import { SubscriptionServer } from "./services";

const server = new Server();
server.addService(SubscriptionService, new SubscriptionServer());

// import router from "./routes/routes";

// const app = express();
// app.use(express.json());
// app.use(router);

const port = 3333;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());
server.start();

// export default app;
