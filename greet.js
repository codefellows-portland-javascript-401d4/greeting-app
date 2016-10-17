function greet(name) {
    name = name || 'friend';
    return 'Hello, ' + name;
}

// If this tests true, it means we were run from the command-line
// Otherwise, we were invoked in a 'require' statement
if (require.main == module) {
    console.log(greet(process.argv[2]));
}

module.exports = greet;