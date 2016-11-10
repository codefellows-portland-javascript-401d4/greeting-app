var figlet = require('figlet');


function greet(name){ 
    // name = process.argv.pop() 
    figlet(`Hello, ${name}!`, (err, data) => {
        console.log('2', name)
        if (err) throw err;
        console.log(data);
        return `Hello, ${name}`;
    })
}

module.exports = greet;