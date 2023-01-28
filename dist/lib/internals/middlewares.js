"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddleWares = void 0;
const express_1 = __importDefault(require("express"));
exports.MiddleWares = {
    static: express_1.default.static,
    json: express_1.default.json,
    urlencoded: express_1.default.json,
    query: express_1.default.query,
    text: express_1.default.text,
    raw: express_1.default.raw
};
