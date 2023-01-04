import { Request, Response, NextFunction } from 'express';

declare type params1 = (req: Request, res: { statusCode?: number | undefined; setHeader(key: string, value: string): any; end(): any; }, next: (err?: any) => any) => void
declare type params2 = (req:Request, res:Response, next:NextFunction  )=> Promise<void>
declare type params3 = (req:Request, res:Response, next:NextFunction  )=> void

export declare type MiddleWares = Array <params1 | params2 | params3>

