"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const RouteBase_1 = __importDefault(require("./types/RouteBase"));
const decorators_1 = require("./decorators");
/* base class for all routes */
class Route extends RouteBase_1.default {
    async get(req, res) { res.send(`can't resolve ${this.path}`); }
    async put(req, res) { res.send(`can't resolve ${this.path}`); }
    async post(req, res) { res.send(`can't resolve ${this.path}`); }
    async delete(req, res) { res.send(`can't resolve ${this.path}`); }
    static fooFunc = decorators_1.foo;
    static fooTest = decorators_1.initRoute;
}
exports.Route = Route;
