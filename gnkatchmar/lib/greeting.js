var randomstring = require('randomstring');

var password = randomstring.generate(8);

module.exports = function greeting(name) {
  var salutation = 'Welcome to Node,';
  var phrase = salutation + ' ' + name + ' Your temporary password is: ' + password;
  return phrase;
};