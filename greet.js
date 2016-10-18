function greet(name) {
    name = name || 'mon ami';
    return 'Bonjour, ' + name;
}
module.exports = greet;