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

var name = process.argv.slice(3).join(' ');

if (cmd.male) {
  sayHello('Mr. ' + name);
}
if (cmd.female) {
  sayHello('Ms. ' + name);
}
if (cmd.married) {
  sayHello('Mrs. ' + name);
}
if (cmd.nonbinary) {
  sayHello('Mx. ' + name);
}
if (cmd.individual) {
  sayHello('Ind. ' + name);
}
if (cmd.yo) {
  sayHello('Yo ' + name);
}