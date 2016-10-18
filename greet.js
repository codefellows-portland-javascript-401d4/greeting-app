function greet(name) {
    name = 'mon ami' || name;
    return 'Bonjour, ' + name;
}
module.exports = greet;