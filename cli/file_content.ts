const fileContent = 
`
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log(process.cwd());
const core_1 = require("@randoms/core");
const output_1 = __importDefault(require("./output.js"));
output_1.default.default.forEach(route => route.default.path);
(0, core_1.runServer)();
`    

export default fileContent;
