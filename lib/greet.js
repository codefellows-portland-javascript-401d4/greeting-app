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


/* basic use case for project
var asciiArt = require("ascii-art");

asciiArt.Figlet.fontPath = 'Fonts';

art.font('Prompt', 'Basic', 'red').font('v1', 'Doom', 'magenta', function(rendered){
    console.log(rendered);
});
*/