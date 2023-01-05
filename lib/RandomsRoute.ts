import { Request, Response, NextFunction } from 'express';
import RouteBase from './types/RouteBase';
import { initRoute } from './decorators';

export declare namespace Route {
    /* Types */
    export type { Request}
    export type { Response }
    export type { NextFunction }
    
    
}


/* base class for all routes */
export abstract class Route extends RouteBase {
    public  async   get     (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve ${this.path}`)  }
    public  async   put     (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve ${this.path}`)  }
    public  async   post    (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve ${this.path}`)  }
    public  async   delete  (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve ${this.path}`)  }

    public static init = initRoute
}
