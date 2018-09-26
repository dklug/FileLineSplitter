'use strict';
const fs = require('fs');
const readline = require('readline');

let filename = './file.txt'; //Set this to the name of the input file
let outputExtension = '.txt'; //Set this to the desired file extension for output
let logButDontWrite = false; //Set to false to enable writing to file.

try {
    const rl = readline.createInterface({
        input: fs.createReadStream(filename),
        crlfDelay: Infinity
    });

    let cnt = 1;
    rl.on('line', (line) => {
        if(logButDontWrite){
            console.log(`Line from file: ${line}`);
        }
        else{
            fs.writeFileSync(cnt+outputExtension,line);
        }
        cnt++;
    });
} catch (err) {
    console.error(new Error(err));
}
