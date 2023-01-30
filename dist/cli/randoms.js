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
const CLI_1 = __importDefault(require("./CLI"));
class RandomsCLI extends CLI_1.default {
    production;
    constructor(argument) {
        super(argument);
        this.production = false;
    }
    runServer() {
        child_process_1.default.exec(`node ./randoms/server.js`, (err, data) => {
            if (err)
                console.log(err);
            else
                console.log(data.toString());
        });
    }
    createIndexFile() {
        if (!fs_1.default.existsSync("./randoms/"))
            fs_1.default.mkdirSync("./randoms/", { recursive: true });
        fs_1.default.writeFileSync('./randoms/server.js', file_content_1.default, "utf8");
    }
    watchFiles() {
        child_process_1.default.exec(`tsc-watch --rootDir ./src --outDir randoms --onSuccess "randoms generate"`, (err, data) => {
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
    }
    generatorCode() {
        const codeGenerator = new code_generator_1.default();
        codeGenerator.writeToFile();
    }
    help() {
        if (this.argument == '--help' || this.argument == '-h') {
            console.log(constant_1.default.helper_text);
            process.exit();
        }
    }
    emitController() {
        this.help();
        switch (this.argument) {
            case 'dev:build':
                this.production = true;
                child_process_1.default.exec(`tsc --rootDir ./src --outDir randoms --diagnostics`, (err, data) => {
                    if (err)
                        console.log(err);
                    else
                        console.log(data.toString());
                });
                this.generatorCode();
                this.createIndexFile();
                break;
            case 'start':
                this.runServer();
                break;
            case 'generate':
                this.generatorCode();
                break;
            case 'dev':
                this.runServer();
                break;
            case 'watch':
                this.watchFiles();
                break;
            default:
                this.help();
        }
    }
}
new RandomsCLI(process.argv[2]).emitController();
