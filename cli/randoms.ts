import      child_process   from        'child_process';
import      CodeGenerator   from        '@randomsts/code-generator';
import      file_content    from        './file_content';
import      CONST           from        './constant';
import      fs              from        'fs';
import      CLI             from        './CLI';

class RandomsCLI extends CLI
{
    private production: boolean;

    public constructor (argument: string)
    {
        super (argument)
        this.production = false;
    }
    
    private runServer (): void
    {
        if (!this.production)
        {
            child_process.exec (`nodemon --exec "node ./randoms/server.js" -e js`);
            return;
        }
        child_process.exec (`node ./randoms/server.js`, (err, data)=>{
            if (err) console.log (err);
            else console.log (data.toString());
        });
    }
    
    private createIndexFile (): void 
    {
        if (!fs.existsSync ("./randoms/"))
        fs.mkdirSync ("./randoms/", {recursive : true});
        fs.writeFileSync ('./randoms/server.js', file_content, "utf8");
    }
    
    private watchFiles (): void
    {
        child_process.exec (`tsc-watch --rootDir ./src --outDir randoms --onSuccess "randoms generate"`, (err,data)=>{
            if (err) console.log (err);
            else console.log (data.toString());
        });
        child_process.exec ("babel randoms --out-dir randoms", (err, data)=>{
            if (err) console.log (err);
            else console.log (data.toString());
        });
    }

    private generatorCode (): void  
    {
        const codeGenerator = new CodeGenerator ();
        codeGenerator.writeToFile ();
    }

    public override help(): void 
    {
        if (this.argument == '--help' || this.argument == '-h')
        {
            console.log (CONST.helper_text);
            process.exit ();
        }
    }
    
    public override emitController () 
    {
        this.help ();
        switch (this.argument)
        {
            case 'build':
                this.production = true;
                child_process.exec (`tsc --rootDir ./src --outDir randoms --diagnostics`, (err, data)=>{
                    if (err) console.log (err);
                    else console.log (data.toString());
                });
                this.generatorCode ();
                this.createIndexFile ();
            break;
            case 'start':
                this.production = true;
                this.runServer ();
            break;
            case 'generate':
                this.createIndexFile ();
                this.generatorCode ();
            break;    
            case 'dev':
                this.runServer ();
            break;
            case 'watch':
                this.watchFiles ();
            break;
            default:
                this.help ();    
        }
    }
}

new RandomsCLI (process.argv [2]).emitController ();


