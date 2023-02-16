"use strict";
// https://www.npmjs.com/package/@randomsts/code-generator pkg test
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("testing code-generator pkg...");
const code_generator_1 = __importDefault(require("@randomsts/code-generator"));
//Expected Code Generator should throw an error
const codeGenerator = new code_generator_1.default();
codeGenerator.writeToFile();
