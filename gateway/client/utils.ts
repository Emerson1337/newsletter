import { SubscriptionClient } from "../proto/subscription/subscription_grpc_pb";
import { credentials } from "grpc";

const port = 3333;

export const client = new SubscriptionClient(
  `localhost:${port}`,
  credentials.createInsecure()
);

export const noop = () => {};
