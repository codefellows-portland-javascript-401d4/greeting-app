function greet(name) {
    name = name || 'friend';
    return "Hello, " + name;
}

module.exports = greet;