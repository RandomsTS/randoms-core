const process = require('child_process');
const fs = require ('fs');
const CONST = require ('./constant');
const file_content = require ("./file_content");
const code_generator = require ("@randomsts/code-generator");

const start_server = (production = false)=> {
    const node_buffer = process.exec (`node ./randoms/server.js${production ?? '--env=production'}`);
    console.log (node_buffer);
}

const create_file = () => fs.writeFileSync ('./randoms/server.js', file_content, "utf8");

const build_files = (production = false)=>{
    const tsc_buffer = process.exec (`tsc --rootDir ./src --outDir randoms ${production ? '--diagnostics' : '--watch'}`);
    console.log (tsc_buffer);
    const babel_buffer = process.exec ("babel randoms --out-dir randoms");
    console.log (babel_buffer);
    code_generator.writeToFile ();
}

console.log (process.argv);

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
        create_file (true);
        start_server ();
    break;   
    default:
        console.log (`Invalid Argument ${argu}`);
    break;
}
