import { Subscriber, SubRequest } from "../proto/subscription/subscription_pb";
import { client } from "./utils";

export default function subscribeUser(name: string, email: string) {
  return new Promise<Subscriber>((resolve, reject) => {
    const request = new SubRequest();
    request.setName(name);
    request.setEmail(email);

    client.subscribeUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}
