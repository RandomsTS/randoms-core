"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMiddlewares = exports.createRoute = exports.runServer = exports.routers = void 0;
const express_1 = require("express");
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
    const pathToArr = path.split('/');
    const fileName = pathToArr[pathToArr.length - 1];
    let isDynamicRoute = fileName.startsWith("...") || fileName.startsWith(":");
    console.log(`initializing route on ${path}`);
    if (isDynamicRoute) {
        exports.routers[path] = (0, express_1.Router)();
        middleWares.forEach(mw => exports.routers[path].use(mw));
        exports.routers[path].get(path, routeBase.get);
        exports.routers[path].put(path, routeBase.put);
        exports.routers[path].post(path, routeBase.post);
        exports.routers[path].delete(path, routeBase.delete);
        app.use('/', exports.routers[path]);
        return;
    }
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
/// Applys middlewares application level middlewars
///
function useMiddlewares(middleWares) {
    middleWares.forEach(mw => app.use(mw));
}
exports.useMiddlewares = useMiddlewares;
