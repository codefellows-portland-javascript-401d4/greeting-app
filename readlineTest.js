var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question('What is the airspeed of a swallow?', function(swallowSpeed) {
    var msg = "I don't know?"
    console.log('the prompt: '+swallowSpeed);
    if (swallowSpeed){
        console.log(swallowSpeed, 'Done');
    } else {
        console.log("fail: empty");
    }
    process.exit();
});

module.exports = readLine;