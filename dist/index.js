"use strict";
/* internal */
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.initRoute = exports.runServer = exports.useMiddlewares = void 0;
// export { isValidType } from './lib/internals/typechecker';
/* Public APIS */
const RandomsRoute_1 = require("./lib/RandomsRoute");
var server_1 = require("./lib/internals/server");
Object.defineProperty(exports, "useMiddlewares", { enumerable: true, get: function () { return server_1.useMiddlewares; } });
Object.defineProperty(exports, "runServer", { enumerable: true, get: function () { return server_1.runServer; } });
var decorators_1 = require("./lib/decorators");
Object.defineProperty(exports, "initRoute", { enumerable: true, get: function () { return decorators_1.initRoute; } });
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return decorators_1.init; } });
exports.default = RandomsRoute_1.Route;
