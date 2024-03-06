//maybe works in linux but not tested

const { exec } = require('child_process');

function runFortune() {
    exec('fortune', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
}

runFortune();
