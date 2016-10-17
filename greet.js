function greet(name) {
  var name = name || 'strange intruder';
  return 'Hello, ' + name + '. Make yourself at home.';
}

module.exports = greet;