import RouteBase from '../types/RouteBase'

export function isValidType (type:any): boolean {
    if (type.instanceof (RouteBase)) 
        return true;
    return false;    
}

