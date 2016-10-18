/** Created by Gloria on 10/18/16. **/

var cmd = require('commander');
var sayHello = require('./greeter');

cmd
  .version('1.0.1')
  .option('-m, --male', 'Mr.')
  .option('-f, --female', 'Ms.')
  .option('-M, --married', 'Mrs.')
  .option('-x, --nonbinary', 'Mx.')
  .option('-i, --individual', 'Ind.')
  .option('-y, --yo', 'Yo')
  .parse(process.argv);

if (process.argv.length > 2) {
  // if this is called with more than just node and the script name, pass those to sayHello
  var name = process.argv.slice(3).join(' ');
} else {
  name = '';
}

if (cmd.male) {
  sayHello('Mr. ' + name);
}
else if (cmd.female) {
  sayHello('Ms. ' + name);
}
else if (cmd.married) {
  sayHello('Mrs. ' + name);
}
else if (cmd.nonbinary) {
  sayHello('Mx. ' + name);
}
else if (cmd.individual) {
  sayHello('Ind. ' + name);
}
else if (cmd.yo) {
  sayHello('Yo ' + name);
}
else {
  sayHello(name);
}