/** Created by Gloria on 10/17/16. **/


if (process.argv.length > 2) {
  // if this is called with more than just node and the script name, pass those to sayHello
  argString = process.argv.slice(2).join(' ');
  sayHello(argString);
}

function sayHello(name) {
  var salutation = 'Hello';

  // process the name passed in, otherwise add an !
  if (name) {
    console.log(salutation + ' ' + name + '!');
    return salutation + ' ' + name + '!';
  } else {
    console.log(salutation + '!');
    return salutation + '!';
  }
}

module.exports = sayHello;