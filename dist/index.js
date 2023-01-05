"use strict";
/* internal */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = exports.useMiddlewares = void 0;
// export { isValidType } from './lib/internals/typechecker';
/* Public APIS */
const RandomsRoute_1 = require("./lib/RandomsRoute");
var server_1 = require("./lib/internals/server");
Object.defineProperty(exports, "useMiddlewares", { enumerable: true, get: function () { return server_1.useMiddlewares; } });
Object.defineProperty(exports, "runServer", { enumerable: true, get: function () { return server_1.runServer; } });
exports.default = RandomsRoute_1.Route;
