function greet(name) {
     name = name || 'friend';
     console.log('hello ' + name);
}

if (process.argv.length > 2) {
    greet(process.argv[2]);
}

module.exports = greet;