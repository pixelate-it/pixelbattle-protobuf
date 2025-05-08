/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.pixelbattle = (function() {
    
        /**
         * Namespace pixelbattle.
         * @exports pixelbattle
         * @namespace
         */
        var pixelbattle = {};
    
        pixelbattle.pingpong = (function() {
    
            /**
             * Namespace pingpong.
             * @memberof pixelbattle
             * @namespace
             */
            var pingpong = {};
    
            pingpong.Ping = (function() {
    
                /**
                 * Properties of a Ping.
                 * @memberof pixelbattle.pingpong
                 * @interface IPing
                 * @property {number|Long|null} [timestamp] Ping timestamp
                 */
    
                /**
                 * Constructs a new Ping.
                 * @memberof pixelbattle.pingpong
                 * @classdesc Represents a Ping.
                 * @implements IPing
                 * @constructor
                 * @param {pixelbattle.pingpong.IPing=} [properties] Properties to set
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
                 * @memberof pixelbattle.pingpong.Ping
                 * @instance
                 */
                Ping.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Ping instance using the specified properties.
                 * @function create
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {pixelbattle.pingpong.IPing=} [properties] Properties to set
                 * @returns {pixelbattle.pingpong.Ping} Ping instance
                 */
                Ping.create = function create(properties) {
                    return new Ping(properties);
                };
    
                /**
                 * Encodes the specified Ping message. Does not implicitly {@link pixelbattle.pingpong.Ping.verify|verify} messages.
                 * @function encode
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {pixelbattle.pingpong.IPing} message Ping message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ping.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                        writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.timestamp);
                    return writer;
                };
    
                /**
                 * Encodes the specified Ping message, length delimited. Does not implicitly {@link pixelbattle.pingpong.Ping.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {pixelbattle.pingpong.IPing} message Ping message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ping.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Ping message from the specified reader or buffer.
                 * @function decode
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pixelbattle.pingpong.Ping} Ping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ping.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pixelbattle.pingpong.Ping();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.timestamp = reader.fixed64();
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
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pixelbattle.pingpong.Ping} Ping
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
                 * @memberof pixelbattle.pingpong.Ping
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
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pixelbattle.pingpong.Ping} Ping
                 */
                Ping.fromObject = function fromObject(object) {
                    if (object instanceof $root.pixelbattle.pingpong.Ping)
                        return object;
                    var message = new $root.pixelbattle.pingpong.Ping();
                    if (object.timestamp != null)
                        if ($util.Long)
                            (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                        else if (typeof object.timestamp === "string")
                            message.timestamp = parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a Ping message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {pixelbattle.pingpong.Ping} message Ping
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
                            object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timestamp = options.longs === String ? "0" : 0;
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (typeof message.timestamp === "number")
                            object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                        else
                            object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                    return object;
                };
    
                /**
                 * Converts this Ping to JSON.
                 * @function toJSON
                 * @memberof pixelbattle.pingpong.Ping
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ping.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Ping
                 * @function getTypeUrl
                 * @memberof pixelbattle.pingpong.Ping
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/pixelbattle.pingpong.Ping";
                };
    
                return Ping;
            })();
    
            pingpong.Pong = (function() {
    
                /**
                 * Properties of a Pong.
                 * @memberof pixelbattle.pingpong
                 * @interface IPong
                 * @property {number|Long|null} [timestamp] Pong timestamp
                 */
    
                /**
                 * Constructs a new Pong.
                 * @memberof pixelbattle.pingpong
                 * @classdesc Represents a Pong.
                 * @implements IPong
                 * @constructor
                 * @param {pixelbattle.pingpong.IPong=} [properties] Properties to set
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
                 * @memberof pixelbattle.pingpong.Pong
                 * @instance
                 */
                Pong.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Pong instance using the specified properties.
                 * @function create
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {pixelbattle.pingpong.IPong=} [properties] Properties to set
                 * @returns {pixelbattle.pingpong.Pong} Pong instance
                 */
                Pong.create = function create(properties) {
                    return new Pong(properties);
                };
    
                /**
                 * Encodes the specified Pong message. Does not implicitly {@link pixelbattle.pingpong.Pong.verify|verify} messages.
                 * @function encode
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {pixelbattle.pingpong.IPong} message Pong message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Pong.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                        writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.timestamp);
                    return writer;
                };
    
                /**
                 * Encodes the specified Pong message, length delimited. Does not implicitly {@link pixelbattle.pingpong.Pong.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {pixelbattle.pingpong.IPong} message Pong message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Pong.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Pong message from the specified reader or buffer.
                 * @function decode
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pixelbattle.pingpong.Pong} Pong
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Pong.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pixelbattle.pingpong.Pong();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.timestamp = reader.fixed64();
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
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pixelbattle.pingpong.Pong} Pong
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
                 * @memberof pixelbattle.pingpong.Pong
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
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pixelbattle.pingpong.Pong} Pong
                 */
                Pong.fromObject = function fromObject(object) {
                    if (object instanceof $root.pixelbattle.pingpong.Pong)
                        return object;
                    var message = new $root.pixelbattle.pingpong.Pong();
                    if (object.timestamp != null)
                        if ($util.Long)
                            (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                        else if (typeof object.timestamp === "string")
                            message.timestamp = parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from a Pong message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {pixelbattle.pingpong.Pong} message Pong
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Pong.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timestamp = options.longs === String ? "0" : 0;
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        if (typeof message.timestamp === "number")
                            object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                        else
                            object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                    return object;
                };
    
                /**
                 * Converts this Pong to JSON.
                 * @function toJSON
                 * @memberof pixelbattle.pingpong.Pong
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Pong.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Pong
                 * @function getTypeUrl
                 * @memberof pixelbattle.pingpong.Pong
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/pixelbattle.pingpong.Pong";
                };
    
                return Pong;
            })();
    
            pingpong.SocketMessage = (function() {
    
                /**
                 * Properties of a SocketMessage.
                 * @memberof pixelbattle.pingpong
                 * @interface ISocketMessage
                 * @property {pixelbattle.operations.Operation|null} [op] SocketMessage op
                 * @property {pixelbattle.pingpong.IPing|null} [ping] SocketMessage ping
                 * @property {pixelbattle.pingpong.IPong|null} [pong] SocketMessage pong
                 */
    
                /**
                 * Constructs a new SocketMessage.
                 * @memberof pixelbattle.pingpong
                 * @classdesc Represents a SocketMessage.
                 * @implements ISocketMessage
                 * @constructor
                 * @param {pixelbattle.pingpong.ISocketMessage=} [properties] Properties to set
                 */
                function SocketMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SocketMessage op.
                 * @member {pixelbattle.operations.Operation} op
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @instance
                 */
                SocketMessage.prototype.op = 0;
    
                /**
                 * SocketMessage ping.
                 * @member {pixelbattle.pingpong.IPing|null|undefined} ping
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @instance
                 */
                SocketMessage.prototype.ping = null;
    
                /**
                 * SocketMessage pong.
                 * @member {pixelbattle.pingpong.IPong|null|undefined} pong
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @instance
                 */
                SocketMessage.prototype.pong = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * SocketMessage payload.
                 * @member {"ping"|"pong"|undefined} payload
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @instance
                 */
                Object.defineProperty(SocketMessage.prototype, "payload", {
                    get: $util.oneOfGetter($oneOfFields = ["ping", "pong"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new SocketMessage instance using the specified properties.
                 * @function create
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {pixelbattle.pingpong.ISocketMessage=} [properties] Properties to set
                 * @returns {pixelbattle.pingpong.SocketMessage} SocketMessage instance
                 */
                SocketMessage.create = function create(properties) {
                    return new SocketMessage(properties);
                };
    
                /**
                 * Encodes the specified SocketMessage message. Does not implicitly {@link pixelbattle.pingpong.SocketMessage.verify|verify} messages.
                 * @function encode
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {pixelbattle.pingpong.ISocketMessage} message SocketMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SocketMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
                    if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
                        $root.pixelbattle.pingpong.Ping.encode(message.ping, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
                        $root.pixelbattle.pingpong.Pong.encode(message.pong, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link pixelbattle.pingpong.SocketMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {pixelbattle.pingpong.ISocketMessage} message SocketMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SocketMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pixelbattle.pingpong.SocketMessage} SocketMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SocketMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pixelbattle.pingpong.SocketMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.op = reader.int32();
                                break;
                            }
                        case 2: {
                                message.ping = $root.pixelbattle.pingpong.Ping.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.pong = $root.pixelbattle.pingpong.Pong.decode(reader, reader.uint32());
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
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pixelbattle.pingpong.SocketMessage} SocketMessage
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
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SocketMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.op != null && message.hasOwnProperty("op"))
                        switch (message.op) {
                        default:
                            return "op: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.ping != null && message.hasOwnProperty("ping")) {
                        properties.payload = 1;
                        {
                            var error = $root.pixelbattle.pingpong.Ping.verify(message.ping);
                            if (error)
                                return "ping." + error;
                        }
                    }
                    if (message.pong != null && message.hasOwnProperty("pong")) {
                        if (properties.payload === 1)
                            return "payload: multiple values";
                        properties.payload = 1;
                        {
                            var error = $root.pixelbattle.pingpong.Pong.verify(message.pong);
                            if (error)
                                return "pong." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SocketMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pixelbattle.pingpong.SocketMessage} SocketMessage
                 */
                SocketMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.pixelbattle.pingpong.SocketMessage)
                        return object;
                    var message = new $root.pixelbattle.pingpong.SocketMessage();
                    switch (object.op) {
                    default:
                        if (typeof object.op === "number") {
                            message.op = object.op;
                            break;
                        }
                        break;
                    case "PING":
                    case 0:
                        message.op = 0;
                        break;
                    case "PONG":
                    case 1:
                        message.op = 1;
                        break;
                    }
                    if (object.ping != null) {
                        if (typeof object.ping !== "object")
                            throw TypeError(".pixelbattle.pingpong.SocketMessage.ping: object expected");
                        message.ping = $root.pixelbattle.pingpong.Ping.fromObject(object.ping);
                    }
                    if (object.pong != null) {
                        if (typeof object.pong !== "object")
                            throw TypeError(".pixelbattle.pingpong.SocketMessage.pong: object expected");
                        message.pong = $root.pixelbattle.pingpong.Pong.fromObject(object.pong);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {pixelbattle.pingpong.SocketMessage} message SocketMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SocketMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.op = options.enums === String ? "PING" : 0;
                    if (message.op != null && message.hasOwnProperty("op"))
                        object.op = options.enums === String ? $root.pixelbattle.operations.Operation[message.op] === undefined ? message.op : $root.pixelbattle.operations.Operation[message.op] : message.op;
                    if (message.ping != null && message.hasOwnProperty("ping")) {
                        object.ping = $root.pixelbattle.pingpong.Ping.toObject(message.ping, options);
                        if (options.oneofs)
                            object.payload = "ping";
                    }
                    if (message.pong != null && message.hasOwnProperty("pong")) {
                        object.pong = $root.pixelbattle.pingpong.Pong.toObject(message.pong, options);
                        if (options.oneofs)
                            object.payload = "pong";
                    }
                    return object;
                };
    
                /**
                 * Converts this SocketMessage to JSON.
                 * @function toJSON
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SocketMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SocketMessage
                 * @function getTypeUrl
                 * @memberof pixelbattle.pingpong.SocketMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SocketMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/pixelbattle.pingpong.SocketMessage";
                };
    
                return SocketMessage;
            })();
    
            return pingpong;
        })();
    
        pixelbattle.operations = (function() {
    
            /**
             * Namespace operations.
             * @memberof pixelbattle
             * @namespace
             */
            var operations = {};
    
            /**
             * Operation enum.
             * @name pixelbattle.operations.Operation
             * @enum {number}
             * @property {number} PING=0 PING value
             * @property {number} PONG=1 PONG value
             */
            operations.Operation = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PING"] = 0;
                values[valuesById[1] = "PONG"] = 1;
                return values;
            })();
    
            return operations;
        })();
    
        return pixelbattle;
    })();

    return $root;
});
