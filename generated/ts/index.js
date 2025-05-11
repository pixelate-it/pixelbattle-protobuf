/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Init = (function() {

    /**
     * Properties of an Init.
     * @exports IInit
     * @interface IInit
     * @property {string|null} [id] Init id
     */

    /**
     * Constructs a new Init.
     * @exports Init
     * @classdesc Represents an Init.
     * @implements IInit
     * @constructor
     * @param {IInit=} [properties] Properties to set
     */
    function Init(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Init id.
     * @member {string} id
     * @memberof Init
     * @instance
     */
    Init.prototype.id = "";

    /**
     * Creates a new Init instance using the specified properties.
     * @function create
     * @memberof Init
     * @static
     * @param {IInit=} [properties] Properties to set
     * @returns {Init} Init instance
     */
    Init.create = function create(properties) {
        return new Init(properties);
    };

    /**
     * Encodes the specified Init message. Does not implicitly {@link Init.verify|verify} messages.
     * @function encode
     * @memberof Init
     * @static
     * @param {IInit} message Init message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Init.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified Init message, length delimited. Does not implicitly {@link Init.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Init
     * @static
     * @param {IInit} message Init message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Init.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Init message from the specified reader or buffer.
     * @function decode
     * @memberof Init
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Init} Init
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Init.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Init();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
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
     * Decodes an Init message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Init
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Init} Init
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Init.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Init message.
     * @function verify
     * @memberof Init
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Init.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates an Init message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Init
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Init} Init
     */
    Init.fromObject = function fromObject(object) {
        if (object instanceof $root.Init)
            return object;
        var message = new $root.Init();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from an Init message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Init
     * @static
     * @param {Init} message Init
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Init.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this Init to JSON.
     * @function toJSON
     * @memberof Init
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Init.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Init
     * @function getTypeUrl
     * @memberof Init
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Init.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Init";
    };

    return Init;
})();

$root.SocketMessage = (function() {

    /**
     * Properties of a SocketMessage.
     * @exports ISocketMessage
     * @interface ISocketMessage
     * @property {IInit|null} [init] SocketMessage init
     * @property {IPing|null} [ping] SocketMessage ping
     * @property {IPong|null} [pong] SocketMessage pong
     */

    /**
     * Constructs a new SocketMessage.
     * @exports SocketMessage
     * @classdesc Represents a SocketMessage.
     * @implements ISocketMessage
     * @constructor
     * @param {ISocketMessage=} [properties] Properties to set
     */
    function SocketMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SocketMessage init.
     * @member {IInit|null|undefined} init
     * @memberof SocketMessage
     * @instance
     */
    SocketMessage.prototype.init = null;

    /**
     * SocketMessage ping.
     * @member {IPing|null|undefined} ping
     * @memberof SocketMessage
     * @instance
     */
    SocketMessage.prototype.ping = null;

    /**
     * SocketMessage pong.
     * @member {IPong|null|undefined} pong
     * @memberof SocketMessage
     * @instance
     */
    SocketMessage.prototype.pong = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SocketMessage payload.
     * @member {"init"|"ping"|"pong"|undefined} payload
     * @memberof SocketMessage
     * @instance
     */
    Object.defineProperty(SocketMessage.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["init", "ping", "pong"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SocketMessage instance using the specified properties.
     * @function create
     * @memberof SocketMessage
     * @static
     * @param {ISocketMessage=} [properties] Properties to set
     * @returns {SocketMessage} SocketMessage instance
     */
    SocketMessage.create = function create(properties) {
        return new SocketMessage(properties);
    };

    /**
     * Encodes the specified SocketMessage message. Does not implicitly {@link SocketMessage.verify|verify} messages.
     * @function encode
     * @memberof SocketMessage
     * @static
     * @param {ISocketMessage} message SocketMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SocketMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.init != null && Object.hasOwnProperty.call(message, "init"))
            $root.Init.encode(message.init, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
            $root.Ping.encode(message.ping, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
            $root.Pong.encode(message.pong, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link SocketMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SocketMessage
     * @static
     * @param {ISocketMessage} message SocketMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SocketMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SocketMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SocketMessage} SocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SocketMessage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.init = $root.Init.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.ping = $root.Ping.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.pong = $root.Pong.decode(reader, reader.uint32());
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
     * Decodes a SocketMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SocketMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SocketMessage} SocketMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SocketMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SocketMessage message.
     * @function verify
     * @memberof SocketMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SocketMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.init != null && message.hasOwnProperty("init")) {
            properties.payload = 1;
            {
                var error = $root.Init.verify(message.init);
                if (error)
                    return "init." + error;
            }
        }
        if (message.ping != null && message.hasOwnProperty("ping")) {
            if (properties.payload === 1)
                return "payload: multiple values";
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
        return null;
    };

    /**
     * Creates a SocketMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SocketMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SocketMessage} SocketMessage
     */
    SocketMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SocketMessage)
            return object;
        var message = new $root.SocketMessage();
        if (object.init != null) {
            if (typeof object.init !== "object")
                throw TypeError(".SocketMessage.init: object expected");
            message.init = $root.Init.fromObject(object.init);
        }
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".SocketMessage.ping: object expected");
            message.ping = $root.Ping.fromObject(object.ping);
        }
        if (object.pong != null) {
            if (typeof object.pong !== "object")
                throw TypeError(".SocketMessage.pong: object expected");
            message.pong = $root.Pong.fromObject(object.pong);
        }
        return message;
    };

    /**
     * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SocketMessage
     * @static
     * @param {SocketMessage} message SocketMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SocketMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.init != null && message.hasOwnProperty("init")) {
            object.init = $root.Init.toObject(message.init, options);
            if (options.oneofs)
                object.payload = "init";
        }
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
        return object;
    };

    /**
     * Converts this SocketMessage to JSON.
     * @function toJSON
     * @memberof SocketMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SocketMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SocketMessage
     * @function getTypeUrl
     * @memberof SocketMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SocketMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SocketMessage";
    };

    return SocketMessage;
})();

$root.Ping = (function() {

    /**
     * Properties of a Ping.
     * @exports IPing
     * @interface IPing
     * @property {number|Long|null} [timestamp] Ping timestamp
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
     * Ping timestamp.
     * @member {number|Long} timestamp
     * @memberof Ping
     * @instance
     */
    Ping.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
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
                    message.timestamp = reader.uint64();
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
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
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
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
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
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
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
     * @property {number|Long|null} [timestamp] Pong timestamp
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
     * Pong timestamp.
     * @member {number|Long} timestamp
     * @memberof Pong
     * @instance
     */
    Pong.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
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
                    message.timestamp = reader.uint64();
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
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
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
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
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
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
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

module.exports = $root;
