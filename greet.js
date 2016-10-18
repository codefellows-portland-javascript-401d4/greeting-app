var greet = function(name) {
    
    return 'hello ' + name;
};
console.log(greet(process.argv[2]));
module.exports = greet;

