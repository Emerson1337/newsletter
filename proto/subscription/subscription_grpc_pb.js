// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var subscription_subscription_pb = require('../subscription/subscription_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_subscriptions_SubRequest(arg) {
  if (!(arg instanceof subscription_subscription_pb.SubRequest)) {
    throw new Error('Expected argument of type subscriptions.SubRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_subscriptions_SubRequest(buffer_arg) {
  return subscription_subscription_pb.SubRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_subscriptions_Subscriber(arg) {
  if (!(arg instanceof subscription_subscription_pb.Subscriber)) {
    throw new Error('Expected argument of type subscriptions.Subscriber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_subscriptions_Subscriber(buffer_arg) {
  return subscription_subscription_pb.Subscriber.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscriptionService = exports.SubscriptionService = {
  subscribeUser: {
    path: '/subscriptions.Subscription/SubscribeUser',
    requestStream: false,
    responseStream: false,
    requestType: subscription_subscription_pb.SubRequest,
    responseType: subscription_subscription_pb.Subscriber,
    requestSerialize: serialize_subscriptions_SubRequest,
    requestDeserialize: deserialize_subscriptions_SubRequest,
    responseSerialize: serialize_subscriptions_Subscriber,
    responseDeserialize: deserialize_subscriptions_Subscriber,
  },
};

exports.SubscriptionClient = grpc.makeGenericClientConstructor(SubscriptionService);
