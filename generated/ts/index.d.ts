import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an Envelope. */
export interface IEnvelope {

    /** Envelope id */
    id?: (number|null);

    /** Envelope timestamp */
    timestamp?: (number|Long|null);

    /** Envelope correlationId */
    correlationId?: (number|null);

    /** Envelope ping */
    ping?: (IPing|null);

    /** Envelope pong */
    pong?: (IPong|null);

    /** Envelope pixel */
    pixel?: (IPixel|null);

    /** Envelope error */
    error?: (IError|null);
}

/** Represents an Envelope. */
export class Envelope implements IEnvelope {

    /**
     * Constructs a new Envelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvelope);

    /** Envelope id. */
    public id: number;

    /** Envelope timestamp. */
    public timestamp: (number|Long);

    /** Envelope correlationId. */
    public correlationId: number;

    /** Envelope ping. */
    public ping?: (IPing|null);

    /** Envelope pong. */
    public pong?: (IPong|null);

    /** Envelope pixel. */
    public pixel?: (IPixel|null);

    /** Envelope error. */
    public error?: (IError|null);

    /** Envelope payload. */
    public payload?: ("ping"|"pong"|"pixel"|"error");

    /**
     * Creates a new Envelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Envelope instance
     */
    public static create(properties?: IEnvelope): Envelope;

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Envelope;

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Envelope;

    /**
     * Verifies an Envelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Envelope
     */
    public static fromObject(object: { [k: string]: any }): Envelope;

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @param message Envelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Envelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Envelope
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Ping. */
export interface IPing {

    /** Ping senderSendTime */
    senderSendTime?: (number|Long|null);
}

/** Represents a Ping. */
export class Ping implements IPing {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /** Ping senderSendTime. */
    public senderSendTime: (number|Long);

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

    /** Pong senderSendTime */
    senderSendTime?: (number|Long|null);

    /** Pong recieverReceiveTime */
    recieverReceiveTime?: (number|Long|null);

    /** Pong recieverSendTime */
    recieverSendTime?: (number|Long|null);
}

/** Represents a Pong. */
export class Pong implements IPong {

    /**
     * Constructs a new Pong.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPong);

    /** Pong senderSendTime. */
    public senderSendTime: (number|Long);

    /** Pong recieverReceiveTime. */
    public recieverReceiveTime: (number|Long);

    /** Pong recieverSendTime. */
    public recieverSendTime: (number|Long);

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

/** Properties of a Pixel. */
export interface IPixel {

    /** Pixel id */
    id?: (number|null);

    /** Pixel color */
    color?: (number|null);
}

/** Represents a Pixel. */
export class Pixel implements IPixel {

    /**
     * Constructs a new Pixel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPixel);

    /** Pixel id. */
    public id: number;

    /** Pixel color. */
    public color: number;

    /**
     * Creates a new Pixel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pixel instance
     */
    public static create(properties?: IPixel): Pixel;

    /**
     * Encodes the specified Pixel message. Does not implicitly {@link Pixel.verify|verify} messages.
     * @param message Pixel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPixel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pixel message, length delimited. Does not implicitly {@link Pixel.verify|verify} messages.
     * @param message Pixel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPixel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pixel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pixel;

    /**
     * Decodes a Pixel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pixel;

    /**
     * Verifies a Pixel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Pixel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Pixel
     */
    public static fromObject(object: { [k: string]: any }): Pixel;

    /**
     * Creates a plain object from a Pixel message. Also converts values to other types if specified.
     * @param message Pixel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pixel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Pixel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Pixel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ErrorCode enum. */
export enum ErrorCode {
    UNKNOWN = 0,
    PIXEL_NOT_FOUND = 100,
    PIXEL_OUT_OF_BOUNDS = 101,
    USER_NOT_FOUND = 200,
    USER_COOLDOWN = 201
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error code. */
    public code: ErrorCode;

    /** Error cooldown. */
    public cooldown?: (ICooldownData|null);

    /** Error bounds. */
    public bounds?: (IBoundsData|null);

    /** Error data. */
    public data?: ("cooldown"|"bounds");

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Error
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CooldownData. */
export class CooldownData implements ICooldownData {

    /**
     * Constructs a new CooldownData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICooldownData);

    /** CooldownData until. */
    public until: (number|Long);

    /**
     * Creates a new CooldownData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CooldownData instance
     */
    public static create(properties?: ICooldownData): CooldownData;

    /**
     * Encodes the specified CooldownData message. Does not implicitly {@link CooldownData.verify|verify} messages.
     * @param message CooldownData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICooldownData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CooldownData message, length delimited. Does not implicitly {@link CooldownData.verify|verify} messages.
     * @param message CooldownData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICooldownData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CooldownData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CooldownData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CooldownData;

    /**
     * Decodes a CooldownData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CooldownData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CooldownData;

    /**
     * Verifies a CooldownData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CooldownData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CooldownData
     */
    public static fromObject(object: { [k: string]: any }): CooldownData;

    /**
     * Creates a plain object from a CooldownData message. Also converts values to other types if specified.
     * @param message CooldownData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CooldownData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CooldownData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CooldownData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BoundsData. */
export class BoundsData implements IBoundsData {

    /**
     * Constructs a new BoundsData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoundsData);

    /** BoundsData max. */
    public max: number;

    /**
     * Creates a new BoundsData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoundsData instance
     */
    public static create(properties?: IBoundsData): BoundsData;

    /**
     * Encodes the specified BoundsData message. Does not implicitly {@link BoundsData.verify|verify} messages.
     * @param message BoundsData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoundsData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BoundsData message, length delimited. Does not implicitly {@link BoundsData.verify|verify} messages.
     * @param message BoundsData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoundsData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BoundsData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoundsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BoundsData;

    /**
     * Decodes a BoundsData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoundsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BoundsData;

    /**
     * Verifies a BoundsData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BoundsData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoundsData
     */
    public static fromObject(object: { [k: string]: any }): BoundsData;

    /**
     * Creates a plain object from a BoundsData message. Also converts values to other types if specified.
     * @param message BoundsData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BoundsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BoundsData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BoundsData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
