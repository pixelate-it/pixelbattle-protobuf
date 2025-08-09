/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Envelope = (function() {

    /**
     * Properties of an Envelope.
     * @exports IEnvelope
     * @interface IEnvelope
     * @property {number|null} [id] Envelope id
     * @property {number|Long|null} [timestamp] Envelope timestamp
     * @property {number|null} [correlationId] Envelope correlationId
     * @property {IPing|null} [ping] Envelope ping
     * @property {IPong|null} [pong] Envelope pong
     * @property {IPixel|null} [pixel] Envelope pixel
     * @property {IError|null} [error] Envelope error
     */

    /**
     * Constructs a new Envelope.
     * @exports Envelope
     * @classdesc Represents an Envelope.
     * @implements IEnvelope
     * @constructor
     * @param {IEnvelope=} [properties] Properties to set
     */
    function Envelope(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Envelope id.
     * @member {number} id
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.id = 0;

    /**
     * Envelope timestamp.
     * @member {number|Long} timestamp
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Envelope correlationId.
     * @member {number} correlationId
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.correlationId = 0;

    /**
     * Envelope ping.
     * @member {IPing|null|undefined} ping
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.ping = null;

    /**
     * Envelope pong.
     * @member {IPong|null|undefined} pong
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.pong = null;

    /**
     * Envelope pixel.
     * @member {IPixel|null|undefined} pixel
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.pixel = null;

    /**
     * Envelope error.
     * @member {IError|null|undefined} error
     * @memberof Envelope
     * @instance
     */
    Envelope.prototype.error = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Envelope payload.
     * @member {"ping"|"pong"|"pixel"|"error"|undefined} payload
     * @memberof Envelope
     * @instance
     */
    Object.defineProperty(Envelope.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["ping", "pong", "pixel", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Envelope instance using the specified properties.
     * @function create
     * @memberof Envelope
     * @static
     * @param {IEnvelope=} [properties] Properties to set
     * @returns {Envelope} Envelope instance
     */
    Envelope.create = function create(properties) {
        return new Envelope(properties);
    };

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @function encode
     * @memberof Envelope
     * @static
     * @param {IEnvelope} message Envelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Envelope.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
        if (message.correlationId != null && Object.hasOwnProperty.call(message, "correlationId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.correlationId);
        if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
            $root.Ping.encode(message.ping, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
            $root.Pong.encode(message.pong, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.pixel != null && Object.hasOwnProperty.call(message, "pixel"))
            $root.Pixel.encode(message.pixel, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.Error.encode(message.error, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Envelope
     * @static
     * @param {IEnvelope} message Envelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Envelope.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @function decode
     * @memberof Envelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Envelope} Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Envelope.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Envelope();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.timestamp = reader.int64();
                    break;
                }
            case 3: {
                    message.correlationId = reader.uint32();
                    break;
                }
            case 6: {
                    message.ping = $root.Ping.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.pong = $root.Pong.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.pixel = $root.Pixel.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.error = $root.Error.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Envelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Envelope} Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Envelope.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Envelope message.
     * @function verify
     * @memberof Envelope
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Envelope.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            if (!$util.isInteger(message.correlationId))
                return "correlationId: integer expected";
        if (message.ping != null && message.hasOwnProperty("ping")) {
            properties.payload = 1;
            {
                var error = $root.Ping.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
        }
        if (message.pong != null && message.hasOwnProperty("pong")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.Pong.verify(message.pong);
                if (error)
                    return "pong." + error;
            }
        }
        if (message.pixel != null && message.hasOwnProperty("pixel")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.Pixel.verify(message.pixel);
                if (error)
                    return "pixel." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Envelope
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Envelope} Envelope
     */
    Envelope.fromObject = function fromObject(object) {
        if (object instanceof $root.Envelope)
            return object;
        var message = new $root.Envelope();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        if (object.correlationId != null)
            message.correlationId = object.correlationId >>> 0;
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".Envelope.ping: object expected");
            message.ping = $root.Ping.fromObject(object.ping);
        }
        if (object.pong != null) {
            if (typeof object.pong !== "object")
                throw TypeError(".Envelope.pong: object expected");
            message.pong = $root.Pong.fromObject(object.pong);
        }
        if (object.pixel != null) {
            if (typeof object.pixel !== "object")
                throw TypeError(".Envelope.pixel: object expected");
            message.pixel = $root.Pixel.fromObject(object.pixel);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".Envelope.error: object expected");
            message.error = $root.Error.fromObject(object.error);
        }
        return message;
    };

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Envelope
     * @static
     * @param {Envelope} message Envelope
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Envelope.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.correlationId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            object.correlationId = message.correlationId;
        if (message.ping != null && message.hasOwnProperty("ping")) {
            object.ping = $root.Ping.toObject(message.ping, options);
            if (options.oneofs)
                object.payload = "ping";
        }
        if (message.pong != null && message.hasOwnProperty("pong")) {
            object.pong = $root.Pong.toObject(message.pong, options);
            if (options.oneofs)
                object.payload = "pong";
        }
        if (message.pixel != null && message.hasOwnProperty("pixel")) {
            object.pixel = $root.Pixel.toObject(message.pixel, options);
            if (options.oneofs)
                object.payload = "pixel";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.Error.toObject(message.error, options);
            if (options.oneofs)
                object.payload = "error";
        }
        return object;
    };

    /**
     * Converts this Envelope to JSON.
     * @function toJSON
     * @memberof Envelope
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Envelope.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Envelope
     * @function getTypeUrl
     * @memberof Envelope
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Envelope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Envelope";
    };

    return Envelope;
})();

$root.Ping = (function() {

    /**
     * Properties of a Ping.
     * @exports IPing
     * @interface IPing
     * @property {number|Long|null} [senderSendTime] Ping senderSendTime
     */

    /**
     * Constructs a new Ping.
     * @exports Ping
     * @classdesc Represents a Ping.
     * @implements IPing
     * @constructor
     * @param {IPing=} [properties] Properties to set
     */
    function Ping(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Ping senderSendTime.
     * @member {number|Long} senderSendTime
     * @memberof Ping
     * @instance
     */
    Ping.prototype.senderSendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Ping instance using the specified properties.
     * @function create
     * @memberof Ping
     * @static
     * @param {IPing=} [properties] Properties to set
     * @returns {Ping} Ping instance
     */
    Ping.create = function create(properties) {
        return new Ping(properties);
    };

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encode
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderSendTime != null && Object.hasOwnProperty.call(message, "senderSendTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.senderSendTime);
        return writer;
    };

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @function decode
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.senderSendTime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ping message.
     * @function verify
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ping.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderSendTime != null && message.hasOwnProperty("senderSendTime"))
            if (!$util.isInteger(message.senderSendTime) && !(message.senderSendTime && $util.isInteger(message.senderSendTime.low) && $util.isInteger(message.senderSendTime.high)))
                return "senderSendTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ping} Ping
     */
    Ping.fromObject = function fromObject(object) {
        if (object instanceof $root.Ping)
            return object;
        var message = new $root.Ping();
        if (object.senderSendTime != null)
            if ($util.Long)
                (message.senderSendTime = $util.Long.fromValue(object.senderSendTime)).unsigned = false;
            else if (typeof object.senderSendTime === "string")
                message.senderSendTime = parseInt(object.senderSendTime, 10);
            else if (typeof object.senderSendTime === "number")
                message.senderSendTime = object.senderSendTime;
            else if (typeof object.senderSendTime === "object")
                message.senderSendTime = new $util.LongBits(object.senderSendTime.low >>> 0, object.senderSendTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ping
     * @static
     * @param {Ping} message Ping
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ping.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.senderSendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.senderSendTime = options.longs === String ? "0" : 0;
        if (message.senderSendTime != null && message.hasOwnProperty("senderSendTime"))
            if (typeof message.senderSendTime === "number")
                object.senderSendTime = options.longs === String ? String(message.senderSendTime) : message.senderSendTime;
            else
                object.senderSendTime = options.longs === String ? $util.Long.prototype.toString.call(message.senderSendTime) : options.longs === Number ? new $util.LongBits(message.senderSendTime.low >>> 0, message.senderSendTime.high >>> 0).toNumber() : message.senderSendTime;
        return object;
    };

    /**
     * Converts this Ping to JSON.
     * @function toJSON
     * @memberof Ping
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ping.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ping
     * @function getTypeUrl
     * @memberof Ping
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Ping";
    };

    return Ping;
})();

$root.Pong = (function() {

    /**
     * Properties of a Pong.
     * @exports IPong
     * @interface IPong
     * @property {number|Long|null} [senderSendTime] Pong senderSendTime
     * @property {number|Long|null} [recieverReceiveTime] Pong recieverReceiveTime
     * @property {number|Long|null} [recieverSendTime] Pong recieverSendTime
     */

    /**
     * Constructs a new Pong.
     * @exports Pong
     * @classdesc Represents a Pong.
     * @implements IPong
     * @constructor
     * @param {IPong=} [properties] Properties to set
     */
    function Pong(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Pong senderSendTime.
     * @member {number|Long} senderSendTime
     * @memberof Pong
     * @instance
     */
    Pong.prototype.senderSendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Pong recieverReceiveTime.
     * @member {number|Long} recieverReceiveTime
     * @memberof Pong
     * @instance
     */
    Pong.prototype.recieverReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Pong recieverSendTime.
     * @member {number|Long} recieverSendTime
     * @memberof Pong
     * @instance
     */
    Pong.prototype.recieverSendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Pong instance using the specified properties.
     * @function create
     * @memberof Pong
     * @static
     * @param {IPong=} [properties] Properties to set
     * @returns {Pong} Pong instance
     */
    Pong.create = function create(properties) {
        return new Pong(properties);
    };

    /**
     * Encodes the specified Pong message. Does not implicitly {@link Pong.verify|verify} messages.
     * @function encode
     * @memberof Pong
     * @static
     * @param {IPong} message Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pong.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderSendTime != null && Object.hasOwnProperty.call(message, "senderSendTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.senderSendTime);
        if (message.recieverReceiveTime != null && Object.hasOwnProperty.call(message, "recieverReceiveTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.recieverReceiveTime);
        if (message.recieverSendTime != null && Object.hasOwnProperty.call(message, "recieverSendTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.recieverSendTime);
        return writer;
    };

    /**
     * Encodes the specified Pong message, length delimited. Does not implicitly {@link Pong.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Pong
     * @static
     * @param {IPong} message Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pong.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Pong message from the specified reader or buffer.
     * @function decode
     * @memberof Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Pong} Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pong.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pong();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.senderSendTime = reader.int64();
                    break;
                }
            case 2: {
                    message.recieverReceiveTime = reader.int64();
                    break;
                }
            case 3: {
                    message.recieverSendTime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Pong message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Pong} Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pong.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Pong message.
     * @function verify
     * @memberof Pong
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Pong.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderSendTime != null && message.hasOwnProperty("senderSendTime"))
            if (!$util.isInteger(message.senderSendTime) && !(message.senderSendTime && $util.isInteger(message.senderSendTime.low) && $util.isInteger(message.senderSendTime.high)))
                return "senderSendTime: integer|Long expected";
        if (message.recieverReceiveTime != null && message.hasOwnProperty("recieverReceiveTime"))
            if (!$util.isInteger(message.recieverReceiveTime) && !(message.recieverReceiveTime && $util.isInteger(message.recieverReceiveTime.low) && $util.isInteger(message.recieverReceiveTime.high)))
                return "recieverReceiveTime: integer|Long expected";
        if (message.recieverSendTime != null && message.hasOwnProperty("recieverSendTime"))
            if (!$util.isInteger(message.recieverSendTime) && !(message.recieverSendTime && $util.isInteger(message.recieverSendTime.low) && $util.isInteger(message.recieverSendTime.high)))
                return "recieverSendTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a Pong message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Pong
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Pong} Pong
     */
    Pong.fromObject = function fromObject(object) {
        if (object instanceof $root.Pong)
            return object;
        var message = new $root.Pong();
        if (object.senderSendTime != null)
            if ($util.Long)
                (message.senderSendTime = $util.Long.fromValue(object.senderSendTime)).unsigned = false;
            else if (typeof object.senderSendTime === "string")
                message.senderSendTime = parseInt(object.senderSendTime, 10);
            else if (typeof object.senderSendTime === "number")
                message.senderSendTime = object.senderSendTime;
            else if (typeof object.senderSendTime === "object")
                message.senderSendTime = new $util.LongBits(object.senderSendTime.low >>> 0, object.senderSendTime.high >>> 0).toNumber();
        if (object.recieverReceiveTime != null)
            if ($util.Long)
                (message.recieverReceiveTime = $util.Long.fromValue(object.recieverReceiveTime)).unsigned = false;
            else if (typeof object.recieverReceiveTime === "string")
                message.recieverReceiveTime = parseInt(object.recieverReceiveTime, 10);
            else if (typeof object.recieverReceiveTime === "number")
                message.recieverReceiveTime = object.recieverReceiveTime;
            else if (typeof object.recieverReceiveTime === "object")
                message.recieverReceiveTime = new $util.LongBits(object.recieverReceiveTime.low >>> 0, object.recieverReceiveTime.high >>> 0).toNumber();
        if (object.recieverSendTime != null)
            if ($util.Long)
                (message.recieverSendTime = $util.Long.fromValue(object.recieverSendTime)).unsigned = false;
            else if (typeof object.recieverSendTime === "string")
                message.recieverSendTime = parseInt(object.recieverSendTime, 10);
            else if (typeof object.recieverSendTime === "number")
                message.recieverSendTime = object.recieverSendTime;
            else if (typeof object.recieverSendTime === "object")
                message.recieverSendTime = new $util.LongBits(object.recieverSendTime.low >>> 0, object.recieverSendTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Pong message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Pong
     * @static
     * @param {Pong} message Pong
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Pong.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.senderSendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.senderSendTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.recieverReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.recieverReceiveTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.recieverSendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.recieverSendTime = options.longs === String ? "0" : 0;
        }
        if (message.senderSendTime != null && message.hasOwnProperty("senderSendTime"))
            if (typeof message.senderSendTime === "number")
                object.senderSendTime = options.longs === String ? String(message.senderSendTime) : message.senderSendTime;
            else
                object.senderSendTime = options.longs === String ? $util.Long.prototype.toString.call(message.senderSendTime) : options.longs === Number ? new $util.LongBits(message.senderSendTime.low >>> 0, message.senderSendTime.high >>> 0).toNumber() : message.senderSendTime;
        if (message.recieverReceiveTime != null && message.hasOwnProperty("recieverReceiveTime"))
            if (typeof message.recieverReceiveTime === "number")
                object.recieverReceiveTime = options.longs === String ? String(message.recieverReceiveTime) : message.recieverReceiveTime;
            else
                object.recieverReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.recieverReceiveTime) : options.longs === Number ? new $util.LongBits(message.recieverReceiveTime.low >>> 0, message.recieverReceiveTime.high >>> 0).toNumber() : message.recieverReceiveTime;
        if (message.recieverSendTime != null && message.hasOwnProperty("recieverSendTime"))
            if (typeof message.recieverSendTime === "number")
                object.recieverSendTime = options.longs === String ? String(message.recieverSendTime) : message.recieverSendTime;
            else
                object.recieverSendTime = options.longs === String ? $util.Long.prototype.toString.call(message.recieverSendTime) : options.longs === Number ? new $util.LongBits(message.recieverSendTime.low >>> 0, message.recieverSendTime.high >>> 0).toNumber() : message.recieverSendTime;
        return object;
    };

    /**
     * Converts this Pong to JSON.
     * @function toJSON
     * @memberof Pong
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Pong.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Pong
     * @function getTypeUrl
     * @memberof Pong
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Pong";
    };

    return Pong;
})();

$root.Pixel = (function() {

    /**
     * Properties of a Pixel.
     * @exports IPixel
     * @interface IPixel
     * @property {number|null} [id] Pixel id
     * @property {number|null} [color] Pixel color
     */

    /**
     * Constructs a new Pixel.
     * @exports Pixel
     * @classdesc Represents a Pixel.
     * @implements IPixel
     * @constructor
     * @param {IPixel=} [properties] Properties to set
     */
    function Pixel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Pixel id.
     * @member {number} id
     * @memberof Pixel
     * @instance
     */
    Pixel.prototype.id = 0;

    /**
     * Pixel color.
     * @member {number} color
     * @memberof Pixel
     * @instance
     */
    Pixel.prototype.color = 0;

    /**
     * Creates a new Pixel instance using the specified properties.
     * @function create
     * @memberof Pixel
     * @static
     * @param {IPixel=} [properties] Properties to set
     * @returns {Pixel} Pixel instance
     */
    Pixel.create = function create(properties) {
        return new Pixel(properties);
    };

    /**
     * Encodes the specified Pixel message. Does not implicitly {@link Pixel.verify|verify} messages.
     * @function encode
     * @memberof Pixel
     * @static
     * @param {IPixel} message Pixel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pixel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.color);
        return writer;
    };

    /**
     * Encodes the specified Pixel message, length delimited. Does not implicitly {@link Pixel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Pixel
     * @static
     * @param {IPixel} message Pixel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pixel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Pixel message from the specified reader or buffer.
     * @function decode
     * @memberof Pixel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Pixel} Pixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pixel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pixel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 3: {
                    message.color = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Pixel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Pixel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Pixel} Pixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pixel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Pixel message.
     * @function verify
     * @memberof Pixel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Pixel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isInteger(message.color))
                return "color: integer expected";
        return null;
    };

    /**
     * Creates a Pixel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Pixel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Pixel} Pixel
     */
    Pixel.fromObject = function fromObject(object) {
        if (object instanceof $root.Pixel)
            return object;
        var message = new $root.Pixel();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.color != null)
            message.color = object.color >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Pixel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Pixel
     * @static
     * @param {Pixel} message Pixel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Pixel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.color = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        return object;
    };

    /**
     * Converts this Pixel to JSON.
     * @function toJSON
     * @memberof Pixel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Pixel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Pixel
     * @function getTypeUrl
     * @memberof Pixel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Pixel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Pixel";
    };

    return Pixel;
})();

/**
 * ErrorCode enum.
 * @exports ErrorCode
 * @enum {number}
 * @property {number} UNKNOWN=0 UNKNOWN value
 * @property {number} PIXEL_NOT_FOUND=100 PIXEL_NOT_FOUND value
 * @property {number} PIXEL_OUT_OF_BOUNDS=101 PIXEL_OUT_OF_BOUNDS value
 * @property {number} USER_NOT_FOUND=200 USER_NOT_FOUND value
 * @property {number} USER_COOLDOWN=201 USER_COOLDOWN value
 */
$root.ErrorCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[100] = "PIXEL_NOT_FOUND"] = 100;
    values[valuesById[101] = "PIXEL_OUT_OF_BOUNDS"] = 101;
    values[valuesById[200] = "USER_NOT_FOUND"] = 200;
    values[valuesById[201] = "USER_COOLDOWN"] = 201;
    return values;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {ErrorCode|null} [code] Error code
     * @property {ICooldownData|null} [cooldown] Error cooldown
     * @property {IBoundsData|null} [bounds] Error bounds
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error code.
     * @member {ErrorCode} code
     * @memberof Error
     * @instance
     */
    Error.prototype.code = 0;

    /**
     * Error cooldown.
     * @member {ICooldownData|null|undefined} cooldown
     * @memberof Error
     * @instance
     */
    Error.prototype.cooldown = null;

    /**
     * Error bounds.
     * @member {IBoundsData|null|undefined} bounds
     * @memberof Error
     * @instance
     */
    Error.prototype.bounds = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Error data.
     * @member {"cooldown"|"bounds"|undefined} data
     * @memberof Error
     * @instance
     */
    Object.defineProperty(Error.prototype, "data", {
        get: $util.oneOfGetter($oneOfFields = ["cooldown", "bounds"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.cooldown != null && Object.hasOwnProperty.call(message, "cooldown"))
            $root.CooldownData.encode(message.cooldown, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.bounds != null && Object.hasOwnProperty.call(message, "bounds"))
            $root.BoundsData.encode(message.bounds, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.cooldown = $root.CooldownData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.bounds = $root.BoundsData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Error message.
     * @function verify
     * @memberof Error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 100:
            case 101:
            case 200:
            case 201:
                break;
            }
        if (message.cooldown != null && message.hasOwnProperty("cooldown")) {
            properties.data = 1;
            {
                var error = $root.CooldownData.verify(message.cooldown);
                if (error)
                    return "cooldown." + error;
            }
        }
        if (message.bounds != null && message.hasOwnProperty("bounds")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                var error = $root.BoundsData.verify(message.bounds);
                if (error)
                    return "bounds." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "UNKNOWN":
        case 0:
            message.code = 0;
            break;
        case "PIXEL_NOT_FOUND":
        case 100:
            message.code = 100;
            break;
        case "PIXEL_OUT_OF_BOUNDS":
        case 101:
            message.code = 101;
            break;
        case "USER_NOT_FOUND":
        case 200:
            message.code = 200;
            break;
        case "USER_COOLDOWN":
        case 201:
            message.code = 201;
            break;
        }
        if (object.cooldown != null) {
            if (typeof object.cooldown !== "object")
                throw TypeError(".Error.cooldown: object expected");
            message.cooldown = $root.CooldownData.fromObject(object.cooldown);
        }
        if (object.bounds != null) {
            if (typeof object.bounds !== "object")
                throw TypeError(".Error.bounds: object expected");
            message.bounds = $root.BoundsData.fromObject(object.bounds);
        }
        return message;
    };

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Error
     * @static
     * @param {Error} message Error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = options.enums === String ? "UNKNOWN" : 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.ErrorCode[message.code] === undefined ? message.code : $root.ErrorCode[message.code] : message.code;
        if (message.cooldown != null && message.hasOwnProperty("cooldown")) {
            object.cooldown = $root.CooldownData.toObject(message.cooldown, options);
            if (options.oneofs)
                object.data = "cooldown";
        }
        if (message.bounds != null && message.hasOwnProperty("bounds")) {
            object.bounds = $root.BoundsData.toObject(message.bounds, options);
            if (options.oneofs)
                object.data = "bounds";
        }
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Error
     * @function getTypeUrl
     * @memberof Error
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Error";
    };

    return Error;
})();

$root.CooldownData = (function() {

    /**
     * Properties of a CooldownData.
     * @exports ICooldownData
     * @interface ICooldownData
     * @property {number|Long|null} [until] CooldownData until
     */

    /**
     * Constructs a new CooldownData.
     * @exports CooldownData
     * @classdesc Represents a CooldownData.
     * @implements ICooldownData
     * @constructor
     * @param {ICooldownData=} [properties] Properties to set
     */
    function CooldownData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CooldownData until.
     * @member {number|Long} until
     * @memberof CooldownData
     * @instance
     */
    CooldownData.prototype.until = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CooldownData instance using the specified properties.
     * @function create
     * @memberof CooldownData
     * @static
     * @param {ICooldownData=} [properties] Properties to set
     * @returns {CooldownData} CooldownData instance
     */
    CooldownData.create = function create(properties) {
        return new CooldownData(properties);
    };

    /**
     * Encodes the specified CooldownData message. Does not implicitly {@link CooldownData.verify|verify} messages.
     * @function encode
     * @memberof CooldownData
     * @static
     * @param {ICooldownData} message CooldownData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CooldownData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.until != null && Object.hasOwnProperty.call(message, "until"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.until);
        return writer;
    };

    /**
     * Encodes the specified CooldownData message, length delimited. Does not implicitly {@link CooldownData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CooldownData
     * @static
     * @param {ICooldownData} message CooldownData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CooldownData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CooldownData message from the specified reader or buffer.
     * @function decode
     * @memberof CooldownData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CooldownData} CooldownData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CooldownData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CooldownData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.until = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CooldownData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CooldownData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CooldownData} CooldownData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CooldownData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CooldownData message.
     * @function verify
     * @memberof CooldownData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CooldownData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.until != null && message.hasOwnProperty("until"))
            if (!$util.isInteger(message.until) && !(message.until && $util.isInteger(message.until.low) && $util.isInteger(message.until.high)))
                return "until: integer|Long expected";
        return null;
    };

    /**
     * Creates a CooldownData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CooldownData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CooldownData} CooldownData
     */
    CooldownData.fromObject = function fromObject(object) {
        if (object instanceof $root.CooldownData)
            return object;
        var message = new $root.CooldownData();
        if (object.until != null)
            if ($util.Long)
                (message.until = $util.Long.fromValue(object.until)).unsigned = false;
            else if (typeof object.until === "string")
                message.until = parseInt(object.until, 10);
            else if (typeof object.until === "number")
                message.until = object.until;
            else if (typeof object.until === "object")
                message.until = new $util.LongBits(object.until.low >>> 0, object.until.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CooldownData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CooldownData
     * @static
     * @param {CooldownData} message CooldownData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CooldownData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.until = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.until = options.longs === String ? "0" : 0;
        if (message.until != null && message.hasOwnProperty("until"))
            if (typeof message.until === "number")
                object.until = options.longs === String ? String(message.until) : message.until;
            else
                object.until = options.longs === String ? $util.Long.prototype.toString.call(message.until) : options.longs === Number ? new $util.LongBits(message.until.low >>> 0, message.until.high >>> 0).toNumber() : message.until;
        return object;
    };

    /**
     * Converts this CooldownData to JSON.
     * @function toJSON
     * @memberof CooldownData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CooldownData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CooldownData
     * @function getTypeUrl
     * @memberof CooldownData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CooldownData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CooldownData";
    };

    return CooldownData;
})();

$root.BoundsData = (function() {

    /**
     * Properties of a BoundsData.
     * @exports IBoundsData
     * @interface IBoundsData
     * @property {number|null} [max] BoundsData max
     */

    /**
     * Constructs a new BoundsData.
     * @exports BoundsData
     * @classdesc Represents a BoundsData.
     * @implements IBoundsData
     * @constructor
     * @param {IBoundsData=} [properties] Properties to set
     */
    function BoundsData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoundsData max.
     * @member {number} max
     * @memberof BoundsData
     * @instance
     */
    BoundsData.prototype.max = 0;

    /**
     * Creates a new BoundsData instance using the specified properties.
     * @function create
     * @memberof BoundsData
     * @static
     * @param {IBoundsData=} [properties] Properties to set
     * @returns {BoundsData} BoundsData instance
     */
    BoundsData.create = function create(properties) {
        return new BoundsData(properties);
    };

    /**
     * Encodes the specified BoundsData message. Does not implicitly {@link BoundsData.verify|verify} messages.
     * @function encode
     * @memberof BoundsData
     * @static
     * @param {IBoundsData} message BoundsData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoundsData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.max != null && Object.hasOwnProperty.call(message, "max"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.max);
        return writer;
    };

    /**
     * Encodes the specified BoundsData message, length delimited. Does not implicitly {@link BoundsData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoundsData
     * @static
     * @param {IBoundsData} message BoundsData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoundsData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoundsData message from the specified reader or buffer.
     * @function decode
     * @memberof BoundsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoundsData} BoundsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoundsData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoundsData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.max = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoundsData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoundsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoundsData} BoundsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoundsData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoundsData message.
     * @function verify
     * @memberof BoundsData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoundsData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.max != null && message.hasOwnProperty("max"))
            if (!$util.isInteger(message.max))
                return "max: integer expected";
        return null;
    };

    /**
     * Creates a BoundsData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoundsData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoundsData} BoundsData
     */
    BoundsData.fromObject = function fromObject(object) {
        if (object instanceof $root.BoundsData)
            return object;
        var message = new $root.BoundsData();
        if (object.max != null)
            message.max = object.max | 0;
        return message;
    };

    /**
     * Creates a plain object from a BoundsData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoundsData
     * @static
     * @param {BoundsData} message BoundsData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoundsData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.max = 0;
        if (message.max != null && message.hasOwnProperty("max"))
            object.max = message.max;
        return object;
    };

    /**
     * Converts this BoundsData to JSON.
     * @function toJSON
     * @memberof BoundsData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoundsData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BoundsData
     * @function getTypeUrl
     * @memberof BoundsData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BoundsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BoundsData";
    };

    return BoundsData;
})();

module.exports = $root;
