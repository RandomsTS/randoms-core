"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidType = void 0;
const RouteBase_1 = __importDefault(require("../types/RouteBase"));
function isValidType(type) {
    if (type.instanceof(RouteBase_1.default))
        return true;
    return false;
}
exports.isValidType = isValidType;
