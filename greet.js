function greet(name) {
  var givenName;
  var ending;
  if (name && name !== 'Tim') {
    givenName = name;
    ending = ', how you doing?';
  }else if (name === 'Tim'){
    givenName = name;
    ending = ', you rock!!';
  }else{
    givenName = 'friend';
    ending = ', how you doing?';
  }

  var greeting = 'Hello ' + givenName + ending;
  return greeting;
}

module.exports = greet;