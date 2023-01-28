/* CLI Base Class */

abstract class CLI 
{
    protected argument: string

    public constructor (argument:string) 
    {
        this.argument = argument;
    }

    public abstract emitController (): void;
    public abstract help (): void;
}


export = CLI;


