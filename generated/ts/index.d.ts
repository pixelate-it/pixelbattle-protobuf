import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace pixelbattle. */
export namespace pixelbattle {

    /** Namespace operations. */
    namespace operations {

        /** Operation enum. */
        enum Operation {
            PING = 0,
            PONG = 1
        }
    }

    /** Namespace pingpong. */
    namespace pingpong {

        /** Properties of a Ping. */
        interface IPing {

            /** Ping timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Ping. */
        class Ping implements IPing {

            /**
             * Constructs a new Ping.
             * @param [properties] Properties to set
             */
            constructor(properties?: pixelbattle.pingpong.IPing);

            /** Ping timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Ping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ping instance
             */
            public static create(properties?: pixelbattle.pingpong.IPing): pixelbattle.pingpong.Ping;

            /**
             * Encodes the specified Ping message. Does not implicitly {@link pixelbattle.pingpong.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pixelbattle.pingpong.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link pixelbattle.pingpong.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pixelbattle.pingpong.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pixelbattle.pingpong.Ping;

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pixelbattle.pingpong.Ping;

            /**
             * Verifies a Ping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ping
             */
            public static fromObject(object: { [k: string]: any }): pixelbattle.pingpong.Ping;

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @param message Ping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pixelbattle.pingpong.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Ping
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Pong. */
        interface IPong {

            /** Pong timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Pong. */
        class Pong implements IPong {

            /**
             * Constructs a new Pong.
             * @param [properties] Properties to set
             */
            constructor(properties?: pixelbattle.pingpong.IPong);

            /** Pong timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Pong instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pong instance
             */
            public static create(properties?: pixelbattle.pingpong.IPong): pixelbattle.pingpong.Pong;

            /**
             * Encodes the specified Pong message. Does not implicitly {@link pixelbattle.pingpong.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pixelbattle.pingpong.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link pixelbattle.pingpong.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pixelbattle.pingpong.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pixelbattle.pingpong.Pong;

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pixelbattle.pingpong.Pong;

            /**
             * Verifies a Pong message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pong
             */
            public static fromObject(object: { [k: string]: any }): pixelbattle.pingpong.Pong;

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @param message Pong
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pixelbattle.pingpong.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pong to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Pong
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SocketMessage. */
        interface ISocketMessage {

            /** SocketMessage op */
            op?: (pixelbattle.operations.Operation|null);

            /** SocketMessage ping */
            ping?: (pixelbattle.pingpong.IPing|null);

            /** SocketMessage pong */
            pong?: (pixelbattle.pingpong.IPong|null);
        }

        /** Represents a SocketMessage. */
        class SocketMessage implements ISocketMessage {

            /**
             * Constructs a new SocketMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: pixelbattle.pingpong.ISocketMessage);

            /** SocketMessage op. */
            public op: pixelbattle.operations.Operation;

            /** SocketMessage ping. */
            public ping?: (pixelbattle.pingpong.IPing|null);

            /** SocketMessage pong. */
            public pong?: (pixelbattle.pingpong.IPong|null);

            /** SocketMessage payload. */
            public payload?: ("ping"|"pong");

            /**
             * Creates a new SocketMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SocketMessage instance
             */
            public static create(properties?: pixelbattle.pingpong.ISocketMessage): pixelbattle.pingpong.SocketMessage;

            /**
             * Encodes the specified SocketMessage message. Does not implicitly {@link pixelbattle.pingpong.SocketMessage.verify|verify} messages.
             * @param message SocketMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pixelbattle.pingpong.ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link pixelbattle.pingpong.SocketMessage.verify|verify} messages.
             * @param message SocketMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pixelbattle.pingpong.ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SocketMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pixelbattle.pingpong.SocketMessage;

            /**
             * Decodes a SocketMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pixelbattle.pingpong.SocketMessage;

            /**
             * Verifies a SocketMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SocketMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SocketMessage
             */
            public static fromObject(object: { [k: string]: any }): pixelbattle.pingpong.SocketMessage;

            /**
             * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
             * @param message SocketMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pixelbattle.pingpong.SocketMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SocketMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SocketMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
