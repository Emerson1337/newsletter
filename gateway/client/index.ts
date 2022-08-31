import { Subscriber, SubRequest } from "../proto/subscription/subscription_pb";
import subscribeUserClient from "./subscribe";

async function run() {
  const user = await subscribeUserClient(
    "Emerson",
    "emersonlucenaoficialteste2@gmail.com"
  );
  console.log(user.toString());

  console.log(`\Subscribed user: ${user.toString()}`);
}

run();
