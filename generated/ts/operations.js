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
