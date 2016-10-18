var greet = function() {
    var name = process.argv.pop();
    console.log('name is ' + name);
    console.log('hello ' + name);
    return 'hello ' + name;
    
};
// greet();
module.exports = greet;