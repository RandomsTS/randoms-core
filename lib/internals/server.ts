import express, { Router } from 'express';
import RouteBase from '../types/RouteBase';
import type { MiddleWares } from '../types/RouteTypes';

const app = express ()
const port: number = 3000;
export const routers: {[id:string] : Router} = {};

///
/// starts server
///
export function runServer(): void {
    app.listen(port, () => {
        console.log(`@randoms server is running on port 3000 http://localhost:3000/`)
    })
}

///
/// create router 
///
export function createRoute(routeBase:RouteBase,middleWares:MiddleWares, path: string): void 
{
    if (routers[path]) 
    {
        if (process.env.NODE_ENV != 'production')
            throw new Error (`route with ${path} already exists`);
        return;
    } 
    
    const pathToArr: Array<string> = path.split ('/');
    const fileName: string = pathToArr [pathToArr.length - 1];
    let isDynamicRoute:boolean = fileName.startsWith ("...") || fileName.startsWith (":");
    
    console.log (`initializing route on ${path}`);

    if (isDynamicRoute)
    {
        routers[path] = Router(); 
        middleWares.forEach (mw => routers[path].use(mw));
        routers[path].get(path, routeBase.get);
        routers[path].put (path, routeBase.put);
        routers[path].post(path, routeBase.post);
        routers[path].delete(path, routeBase.delete);
        app.use ('/', routers [path]);
        return;
    }

    routers[path] = Router();
    middleWares.forEach (mw => routers[path].use(mw));
    routers[path].get('/', routeBase.get);
    routers[path].put ('/', routeBase.put);
    routers[path].post('/', routeBase.post);
    routers[path].delete('/', routeBase.delete);
    app.use (path, routers [path]);
}

///
/// Applys middlewares application level middlewars
///
export function useMiddlewares (middleWares: MiddleWares): void {
    middleWares.forEach (mw => app.use (mw));
}


