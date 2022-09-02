// package: subscriptions
// file: subscription/subscription.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Subscriber extends jspb.Message { 
    getSecureId(): string;
    setSecureId(value: string): Subscriber;
    getName(): string;
    setName(value: string): Subscriber;
    getEmail(): string;
    setEmail(value: string): Subscriber;
    getStatus(): number;
    setStatus(value: number): Subscriber;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subscriber.AsObject;
    static toObject(includeInstance: boolean, msg: Subscriber): Subscriber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subscriber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subscriber;
    static deserializeBinaryFromReader(message: Subscriber, reader: jspb.BinaryReader): Subscriber;
}

export namespace Subscriber {
    export type AsObject = {
        secureId: string,
        name: string,
        email: string,
        status: number,
    }
}

export class SubRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SubRequest;
    getEmail(): string;
    setEmail(value: string): SubRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubRequest): SubRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubRequest;
    static deserializeBinaryFromReader(message: SubRequest, reader: jspb.BinaryReader): SubRequest;
}

export namespace SubRequest {
    export type AsObject = {
        name: string,
        email: string,
    }
}

export enum SubStatus {
    UNAVAILABLE = 0,
    AVAILABLE = 1,
}
