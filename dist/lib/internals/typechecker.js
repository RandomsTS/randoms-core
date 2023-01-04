"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidType = void 0;
const RandomsRoute_1 = require("../RandomsRoute");
function isValidType(type) {
    if (type.instanceof(RandomsRoute_1.Route))
        return true;
    return false;
}
exports.isValidType = isValidType;
