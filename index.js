/** Created by Gloria on 10/18/16. **/

var cmd = require('commander');
var sayHello = require('./greeter');

cmd
  .version('1.2.0')
  .option('-m, --male', 'Mr.')
  .option('-f, --female', 'Ms.')
  .option('-M, --married', 'Mrs.')
  .option('-x, --nonbinary', 'Mx.')
  .option('-i, --individual', 'Ind.')
  .option('-y, --yo', 'Yo')
  .parse(process.argv);

if (process.argv.length > 2) {
  // if this is called with more than just node and the script name, pass those to sayHello
  var name = process.argv[process.argv.length - 1];
} else {
  name = '';
}

if (cmd.male) {
  sayHello('Mr. ' + name);
  return ('Mr.');
}
else if (cmd.female) {
  sayHello('Ms. ' + name);
  return ('Ms.');
}
else if (cmd.married) {
  sayHello('Mrs. ' + name);
  return ('Mrs.');
}
else if (cmd.nonbinary) {
  sayHello('Mx. ' + name);
  return ('Mx.');
}
else if (cmd.individual) {
  sayHello('Ind. ' + name);
  return ('Ind.');
}
else if (cmd.yo) {
  sayHello('Yo ' + name);
  return ('Ind.');
}
else {
  sayHello(name);
}