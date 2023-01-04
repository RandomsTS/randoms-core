"use strict";
/* internal */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoute = exports.isValidType = void 0;
var typechecker_1 = require("./lib/internals/typechecker");
Object.defineProperty(exports, "isValidType", { enumerable: true, get: function () { return typechecker_1.isValidType; } });
/* Public APIS */
var decorators_1 = require("./lib/decorators");
Object.defineProperty(exports, "initRoute", { enumerable: true, get: function () { return decorators_1.initRoute; } });
const RandomsRoute_1 = require("./lib/RandomsRoute");
exports.default = RandomsRoute_1.Route;
