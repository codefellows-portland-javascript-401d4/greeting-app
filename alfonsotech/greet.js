//the greet function that we'll be running'
function greet(name) {
    name = name || 'friend';
    return 'hello ' + name;
}
//make this function available gloablly to exports?
module.exports = greet;