/* Public APIS */

import { Route }  from  './lib/RandomsRoute';
export { useMiddlewares, runServer } from './lib/internals/server';

export default Route;


export type {
    Request, Response, NextFunction
} from 'express';

