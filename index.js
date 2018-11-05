'use strict';

var kgb = require('./prolModule.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function interrogation() {
    rl.question('What is your name?', function(name) {
        rl.question('Do you want to labor for the good of the Party?', function(answer) {
            answer === 'no' ? answer = 'yes' : answer = 'yes';
            if (answer === 'yes') {
                console.log(kgb(name));
            }
            rl.close();
            return kgb(name);
        });
    });
}

interrogation();