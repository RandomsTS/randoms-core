/* internal */

// export { isValidType } from './lib/internals/typechecker';

/* Public APIS */

import { Route }  from  './lib/RandomsRoute';
export { useMiddlewares, runServer } from './lib/internals/server';
export { initRoute } from './lib/decorators'
export default Route;


