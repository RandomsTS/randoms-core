/* Public APIS */

import { Route }  from  './lib/RandomsRoute';
export { useMiddlewares, runServer } from './lib/internals/server';

export default Route;
export { initRoute, init } from './lib/decorators';

export type {
    Request, Response, NextFunction
} from 'express';

