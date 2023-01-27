"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidType = void 0;
const RouteBase_1 = require("../types/RouteBase");
function isValidType(type) {
    if (type.instanceof(RouteBase_1.default))
        return true;
    return false;
}
exports.isValidType = isValidType;
