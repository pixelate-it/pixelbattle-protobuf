import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an Init. */
export interface IInit {

    /** Init id */
    id?: (string|null);
}

/** Represents an Init. */
export class Init implements IInit {

    /**
     * Constructs a new Init.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInit);

    /** Init id. */
    public id: string;

    /**
     * Creates a new Init instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Init instance
     */
    public static create(properties?: IInit): Init;

    /**
     * Encodes the specified Init message. Does not implicitly {@link Init.verify|verify} messages.
     * @param message Init message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Init message, length delimited. Does not implicitly {@link Init.verify|verify} messages.
     * @param message Init message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Init message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Init
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Init;

    /**
     * Decodes an Init message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Init
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Init;

    /**
     * Verifies an Init message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Init message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Init
     */
    public static fromObject(object: { [k: string]: any }): Init;

    /**
     * Creates a plain object from an Init message. Also converts values to other types if specified.
     * @param message Init
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Init, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Init to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Init
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SocketMessage. */
export interface ISocketMessage {

    /** SocketMessage init */
    init?: (IInit|null);

    /** SocketMessage ping */
    ping?: (IPing|null);

    /** SocketMessage pong */
    pong?: (IPong|null);
}

/** Represents a SocketMessage. */
export class SocketMessage implements ISocketMessage {

    /**
     * Constructs a new SocketMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISocketMessage);

    /** SocketMessage init. */
    public init?: (IInit|null);

    /** SocketMessage ping. */
    public ping?: (IPing|null);

    /** SocketMessage pong. */
    public pong?: (IPong|null);

    /** SocketMessage payload. */
    public payload?: ("init"|"ping"|"pong");

    /**
     * Creates a new SocketMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SocketMessage instance
     */
    public static create(properties?: ISocketMessage): SocketMessage;

    /**
     * Encodes the specified SocketMessage message. Does not implicitly {@link SocketMessage.verify|verify} messages.
     * @param message SocketMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link SocketMessage.verify|verify} messages.
     * @param message SocketMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SocketMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketMessage;

    /**
     * Decodes a SocketMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketMessage;

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
    public static fromObject(object: { [k: string]: any }): SocketMessage;

    /**
     * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
     * @param message SocketMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SocketMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Properties of a Ping. */
export interface IPing {

    /** Ping timestamp */
    timestamp?: (number|Long|null);
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /** Ping timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ping;

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
    public static fromObject(object: { [k: string]: any }): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
export interface IPong {

    /** Pong timestamp */
    timestamp?: (number|Long|null);
}

/** Represents a Pong. */
export class Pong implements IPong {

    /**
     * Constructs a new Pong.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPong);

    /** Pong timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new Pong instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pong instance
     */
    public static create(properties?: IPong): Pong;

    /**
     * Encodes the specified Pong message. Does not implicitly {@link Pong.verify|verify} messages.
     * @param message Pong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pong message, length delimited. Does not implicitly {@link Pong.verify|verify} messages.
     * @param message Pong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pong message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pong;

    /**
     * Decodes a Pong message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pong;

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
    public static fromObject(object: { [k: string]: any }): Pong;

    /**
     * Creates a plain object from a Pong message. Also converts values to other types if specified.
     * @param message Pong
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
