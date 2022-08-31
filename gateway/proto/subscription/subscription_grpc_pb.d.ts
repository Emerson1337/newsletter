// package: subscriptions
// file: subscription/subscription.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as subscription_subscription_pb from "../subscription/subscription_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISubscriptionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeUser: ISubscriptionService_ISubscribeUser;
}

interface ISubscriptionService_ISubscribeUser extends grpc.MethodDefinition<subscription_subscription_pb.SubRequest, subscription_subscription_pb.Subscriber> {
    path: "/subscriptions.Subscription/SubscribeUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<subscription_subscription_pb.SubRequest>;
    requestDeserialize: grpc.deserialize<subscription_subscription_pb.SubRequest>;
    responseSerialize: grpc.serialize<subscription_subscription_pb.Subscriber>;
    responseDeserialize: grpc.deserialize<subscription_subscription_pb.Subscriber>;
}

export const SubscriptionService: ISubscriptionService;

export interface ISubscriptionServer {
    subscribeUser: grpc.handleUnaryCall<subscription_subscription_pb.SubRequest, subscription_subscription_pb.Subscriber>;
}

export interface ISubscriptionClient {
    subscribeUser(request: subscription_subscription_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
    subscribeUser(request: subscription_subscription_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
    subscribeUser(request: subscription_subscription_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
}

export class SubscriptionClient extends grpc.Client implements ISubscriptionClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribeUser(request: subscription_subscription_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
    public subscribeUser(request: subscription_subscription_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
    public subscribeUser(request: subscription_subscription_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscription_subscription_pb.Subscriber) => void): grpc.ClientUnaryCall;
}
