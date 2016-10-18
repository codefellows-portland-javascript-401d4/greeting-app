function greet(name) {
  var givenName;
  var ending;
  var commandLineName;

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

if (require.main === module) {
  commandLineName = process.argv.pop();
  console.log(greet(commandLineName));
}
module.exports = greet;