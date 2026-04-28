const { loadPyodide } = require("pyodide");

async function main() {
    let inputBuffer = [];
    let pyodide = await loadPyodide({
        stdin: () => {
            if (inputBuffer.length === 0) {
                // mock prompt
                inputBuffer = Array.from(Buffer.from("Steven\n"));
            }
            return inputBuffer.shift();
        }
    });
    
    try {
        await pyodide.runPythonAsync(`
import sys
print("Reading...")
name = sys.stdin.readline()
print(f"Name is {name.strip()}")
`);
        console.log("Success");
    } catch(e) {
        console.log("Error:", e);
    }
}
main();
