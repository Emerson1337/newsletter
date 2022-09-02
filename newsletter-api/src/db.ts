import {
  Subscriber,
  SubStatus,
} from "../../proto/subscription/subscription_pb";

export function userToClass({
  secureId,
  name,
  email,
  status,
}: Subscriber.AsObject) {
  const sub = new Subscriber();
  sub.setSecureId(secureId);
  sub.setName(name);
  sub.setEmail(email);
  sub.setStatus(status);
  return sub;
}

export const subscribers: Subscriber[] = [
  {
    secureId: "4d7113c9-b436-4f62-991f-5eb12700b2cf",
    name: "Emerson",
    email: "emersonlucenaoficial@gmail.com",
    status: SubStatus.AVAILABLE,
  },
  {
    secureId: "f5e0c804-5685-499f-84be-d8cfe1aad142",
    name: "Joss",
    email: "emersonlucenaoficial123@gmail.com",
    status: SubStatus.UNAVAILABLE,
  },
].map(userToClass);
