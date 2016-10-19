function greet(name) {
  var givenName;
  var ending;
  var commandLineName;
  var fullGreeting = {};
  
  var currentDateTime = new Date();

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
  
  fullGreeting.greeting = 'Hello ' + givenName + ending;
  fullGreeting.currentDay = currentDay(currentDateTime);
  fullGreeting.currentTime = currentTime(currentDateTime);

  return fullGreeting;
}

function currentDay(dateTime) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var index = dateTime.getDay();
  return daysOfWeek[index];
}

function currentTime(dateTime) {
  var ampm;
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  if (hour > 11) {
    ampm = 'pm';
  }else{
    ampm = 'am';
  }

  if (hour > 12) {
    hour = hour - 12;
  }else if (hour === 0) {
    hour = '12';
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  return hour + ':' + minute + ampm;
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