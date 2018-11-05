/** Created by Gloria on 10/17/16. **/

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