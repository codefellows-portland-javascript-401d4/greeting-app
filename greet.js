function greet(name) {
    if (name === "Andy") {
        return "Heyyyy, what's up, buddy?";
    } else {
        name = name || 'friend';
        return 'hello ' + name;
    }
}

if (process.argv.length > 2) {
    var bashName = greet(process.argv[2]);
    console.log(bashName);
}

module.exports = greet;