import child_process from 'child_process';
import codeGenerator from '@randomsts/code-generator';
import file_content from './file_content';
import CONST from './constant';
import fs from 'fs';


const start_server = (production:boolean = false)=> {
    const node_buffer = child_process.exec (`node ./randoms/server.js${production ?? '--env=production'}`);
    console.log (node_buffer);
}

const create_file = () => fs.writeFileSync ('./randoms/server.js', file_content, "utf8");

const build_files = (production:boolean = false)=>{
    const tsc_buffer = child_process.exec (`tsc --rootDir ./src --outDir randoms ${production ? '--diagnostics' : '--watch'}`);
    console.log (tsc_buffer.toString ());
    const babel_buffer = child_process.exec ("babel randoms --out-dir randoms");
    console.log (babel_buffer.toString ());
    codeGenerator.writeToFile ();
}


const argu = process.argv [2];

if (argu == '--help' || argu == '-h')
{
    console.log (CONST.helper_text);
    process.exit ();
}

switch (argu)
{
    case 'dev':
        build_files ();
        create_file ();
    break;
    case 'run':
        start_server ();
    break;
    case 'start':
        build_files (true);
        create_file ();
        start_server ();
    break;   
    default:
        console.log (`Invalid Argument ${argu}`);
    break;
}