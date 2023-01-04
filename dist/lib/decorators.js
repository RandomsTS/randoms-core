"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoute = void 0;
const server_1 = require("./internals/server");
const path_util_1 = require("./util/path-util");
/*
  * init router
*/
function initRoute(middleWares = []) {
    return function (constructor) {
        const instance = new constructor();
        instance.path = (0, path_util_1.getCallerPath)();
        (0, server_1.createRoute)(instance, middleWares, instance.path);
    };
}
exports.initRoute = initRoute;
/**
    * randoms router decorator
**/
// export function randomsRoute () {
//     return function <T extends { new (...args: any[]): {} }> (constructor: T) {
//         return class extends constructor {
//             __getPath = function () {   return getCallerPath ()    }
//         }
//     } 
// }
