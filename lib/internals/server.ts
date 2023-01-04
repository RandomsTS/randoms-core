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
    
    routers[path] = Router();
    middleWares.forEach (mw => routers[path].use(mw));
    routers[path].get('/', routeBase.get);
    routers[path].put ('/', routeBase.put);
    routers[path].post('/', routeBase.post);
    routers[path].delete('/', routeBase.delete);
    app.use (path, routers [path]);
}

///
/// Applys middlewares to each route
///
export function useMiddlewares (middleWares: MiddleWares): void {
    middleWares.forEach (mw => app.use (mw));
}


