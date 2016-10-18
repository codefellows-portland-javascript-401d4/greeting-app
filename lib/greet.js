const emoji = require ('node-emoji');
const readline = require('readline');

function greet(name, options) {
  name = name || 'friend';
  if (options && options.type === 'hostile') {
    return 'Hello, ' + name + ', you scumbag low-life ' + emoji.get('rage');
  }
  else if (options && options.type === 'hospitable') {
    return 'Hello, ' + name + ', would you like a hot beverage? ' + emoji.get('coffee');
  }
  else {
    return 'Hello, ' + name;
  }
}

// If this tests true, it means we were run from the command-line
// Otherwise, we were invoked in a 'require' statement
if (require.main == module) {
  var options = {};
  if (!process.argv[2]) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(greet() + '. What\'s your name?', (answer) => {
      console.log(greet(answer) + '. Nice to meet you!');
      rl.close();
    });
  }
  else {
    if (process.argv[3] && process.argv[3].substr(0,2) === '--') {
      var arg = process.argv[3].substr(2);
      arg = arg.split('=');
      var key = arg[0];
      var value = arg[1];
      options[key] = value;
    }
    console.log(greet(process.argv[2], options));
  }
}

module.exports = greet;