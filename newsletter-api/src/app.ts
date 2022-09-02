if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { Server, ServerCredentials } from "grpc";
import { SubscriptionService } from "../../proto/subscription/subscription_grpc_pb";
import { SubscriptionServer } from "./services";

const server = new Server();
server.addService(SubscriptionService, new SubscriptionServer());

const port = 3334;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri} 🚀`);
server.bind(uri, ServerCredentials.createInsecure());
server.start();
