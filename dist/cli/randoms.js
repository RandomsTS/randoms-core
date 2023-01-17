"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const code_generator_1 = __importDefault(require("@randomsts/code-generator"));
const file_content_1 = __importDefault(require("./file_content"));
const constant_1 = __importDefault(require("./constant"));
const fs_1 = __importDefault(require("fs"));
const start_server = (production = false) => {
    child_process_1.default.exec(`node ./randoms/server.js ${production ? '--env=production' : ''}`, (err, data) => {
        if (err)
            console.log(err);
        else
            console.log(data.toString());
    });
};
const create_file = () => {
    if (!fs_1.default.existsSync("./randoms/server.js"))
        fs_1.default.mkdirSync("./randoms/server.js", { recursive: true });
    fs_1.default.writeFileSync('./randoms/server.js', file_content_1.default, "utf8");
};
const build_files = (production = false) => {
    child_process_1.default.exec(`tsc --rootDir ./src --outDir randoms ${production ? '--diagnostics' : '--watch'}`, (err, data) => {
        if (err)
            console.log(err);
        else
            console.log(data.toString());
    });
    child_process_1.default.exec("babel randoms --out-dir randoms", (err, data) => {
        if (err)
            console.log(err);
        else
            console.log(data.toString());
    });
    const codeGenerator = new code_generator_1.default();
    codeGenerator.writeToFile();
};
const argu = process.argv[2];
if (argu == '--help' || argu == '-h') {
    console.log(constant_1.default.helper_text);
    process.exit();
}
switch (argu) {
    case 'dev':
        child_process_1.default.exec(`tsc --rootDir ./src --outDir randoms`, (err, data) => {
            if (err)
                console.log(err);
            else
                console.log(data.toString());
        });
        create_file();
        build_files();
        break;
    case 'run':
        start_server();
        break;
    case 'start':
        build_files(true);
        create_file();
        start_server();
        break;
    default:
        console.log(`Invalid Argument ${argu}`);
        break;
}
