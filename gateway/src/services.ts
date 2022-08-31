import { ServerUnaryCall, sendUnaryData, ServiceError } from "grpc";

import { ISubscriptionServer } from "../proto/subscription/subscription_grpc_pb";
import { Subscriber, SubRequest } from "../proto/subscription/subscription_pb";
import { subscribers } from "./db";

export class SubscriptionServer implements ISubscriptionServer {
  subscribeUser(
    call: ServerUnaryCall<SubRequest>,
    callback: sendUnaryData<Subscriber>
  ) {
    const name = call.request.getName();
    const subEmail = call.request.getEmail();

    const user = subscribers.find((sub) => sub.getEmail() === subEmail);

    if (user) {
      const error: ServiceError = {
        name: "Subscription already exists",
        message: `User with EMAIL ${subEmail} already exists.`,
      };
      callback(error, null);
      return;
    }

    const newSub = new Subscriber();
    newSub.setSecureId("6c9ee6ed-d9253-449b-92d6-8d8c7b388a15");
    newSub.setName(name);
    newSub.setEmail(subEmail);
    newSub.setStatus(1);

    subscribers.push(newSub);

    console.log(`subscribeUser: user with email: ${subEmail} was subscribed.`);
    callback(null, newSub);
  }
}
