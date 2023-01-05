"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallerPath = void 0;
/* return caller file path */
function getCallerFilePath() {
    try {
        const err = new Error();
        const regEx = new RegExp(/at Object.<anonymous> (\(.*?\))/);
        return err.stack?.match(regEx)?.[0].match(/\(.*?\)/)?.[0]
            .replace(/\(|\)/g, "").split(":", 2).join(":");
    }
    catch (err) {
        return undefined;
    }
}
/* return current path with out extension */
function getCallerPath() {
    const callerPath = getCallerFilePath();
    if (callerPath == undefined)
        throw new Error(`Can't read caller file path`);
    const target = callerPath.replaceAll(process.cwd(), '');
    console.log(target);
    return target
        .split('.')[0]
        .replaceAll("\\", "/")
        .replace(/^\/\w+\/\w+\/(.*)$/, '/$1'); // skips starting two dirs
}
exports.getCallerPath = getCallerPath;
