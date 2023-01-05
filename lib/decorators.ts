import RouteBase from "./types/RouteBase";
import { createRoute } from "./internals/server";
import { getCallerPath } from "./util/path-util";
import  type { MiddleWares } from './types/RouteTypes';

/*
  * init router
*/
export function initRoute (middleWares: MiddleWares = []) {
    return function <T extends { new (...args: any[]): {} }> (constructor: T) {
      const instance = new constructor () as RouteBase;
      instance.path = getCallerPath ();
      createRoute (instance, middleWares,instance.path);
    }
}

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
