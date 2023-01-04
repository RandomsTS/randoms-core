import { Request, Response } from "express";

export default abstract class RouteBase {
    public  async   get     (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve`)  }
    public  async   put     (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve`)  }
    public  async   post    (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve`)  }
    public  async   delete  (req: Request, res: Response):  Promise<void> {  res.send (`can't resolve`)  }

    public path:string = '';
}




