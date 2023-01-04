// export default function callsites() {
// 	const _prepareStackTrace = Error.prepareStackTrace;
// 	Error.prepareStackTrace = (_, stack) => stack;
// 	const stack = new Error().stack?.slice(1); // eslint-disable-line unicorn/error-message
// 	Error.prepareStackTrace = _prepareStackTrace;
// 	return stack;
// }

// /*@ts-ignore*/
// console.log (callsites ());
// /*@ts-ignore*/
// console.log (callsites()[0].getFileName());

/*returns caller File Path*/ 
function getCallerFilePath(): string  | undefined {
    try {
      const error =  new Error();
      if (!error.stack) throw new Error('No stack trace available.');
      const stackLines = error.stack.split('\n');
      const callerIndex = 2; // index of the caller in the stack trace
      const callerLine = stackLines[callerIndex]; // get the line that contains the caller
      const filePath = callerLine.match(/\((.+):\d+:\d+\)/); // extract the file path from the line
      if (!filePath) throw new Error('Could not find file path in stack trace.');
      return filePath [1];
    } catch (error) {
      return undefined;
    }
}

/* return current path with out extension */
export function getCallerPath (): string  {
    const callerPath:string = getCallerFilePath () as '';
    const target = callerPath.replaceAll (process.cwd (), '');
    return "/" + target.split ('.') [0].replace (/\\.*?\\/, '').replaceAll ("\\", "/");
}
