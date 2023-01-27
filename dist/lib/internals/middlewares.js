"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddleWares = void 0;
const express_1 = require("express");
exports.MiddleWares = {
    static: express_1.default.static,
    json: express_1.default.json,
    urlencoded: express_1.default.json,
    query: express_1.default.query,
    text: express_1.default.text,
    raw: express_1.default.raw
};
