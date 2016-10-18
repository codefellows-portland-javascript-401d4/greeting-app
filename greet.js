function greet(name) {
    var name = process.argv.pop();
    process.argv.push(name);
    return('Hello, ' + name + '!')
};

console.log(greet());
greet();

module.exports = greet;
