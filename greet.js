function greet(name) {
  var givenName;
  if (name) {
    givenName = name;
  }else{
    givenName = 'friend';
  }

  var greeting = 'Hello ' + givenName + ', how you doing?';
  return greeting;
}

module.exports = greet;