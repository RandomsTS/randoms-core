"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMiddlewares = exports.createRoute = exports.runServer = exports.routers = void 0;
const express_1 = __importStar(require("express"));
const app = (0, express_1.default)();
const port = 3000;
exports.routers = {};
///
/// starts server
///
function runServer() {
    app.listen(port, () => {
        console.log(`@randoms server is running on port 3000 http://localhost:3000/`);
    });
}
exports.runServer = runServer;
///
/// create router 
///
function createRoute(routeBase, middleWares, path) {
    if (exports.routers[path]) {
        if (process.env.NODE_ENV != 'production')
            throw new Error(`route with ${path} already exists`);
        return;
    }
    console.log(`initializing route on ${path}`);
    exports.routers[path] = (0, express_1.Router)();
    middleWares.forEach(mw => exports.routers[path].use(mw));
    exports.routers[path].get('/', routeBase.get);
    exports.routers[path].put('/', routeBase.put);
    exports.routers[path].post('/', routeBase.post);
    exports.routers[path].delete('/', routeBase.delete);
    app.use(path, exports.routers[path]);
}
exports.createRoute = createRoute;
///
/// Applys middlewares to each route
///
function useMiddlewares(middleWares) {
    middleWares.forEach(mw => app.use(mw));
}
exports.useMiddlewares = useMiddlewares;
