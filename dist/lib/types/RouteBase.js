"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteBase {
    async get(req, res) { res.send(`can't resolve`); }
    async put(req, res) { res.send(`can't resolve`); }
    async post(req, res) { res.send(`can't resolve`); }
    async delete(req, res) { res.send(`can't resolve`); }
    path = '';
}
exports.default = RouteBase;
