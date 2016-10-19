var dancer = require('ascii-dance');
var kirbyDance = require('kirby-dance');

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
  fullGreeting.asciiDance = asciiDancing(fullGreeting.currentDay, fullGreeting.currentTime);

  return fullGreeting;
}

//returns current day
function currentDay(dateTime) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var index = dateTime.getDay();
  return daysOfWeek[index];
}

//returns current time - HH:MMam/pm
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

// function that makes dancers
function asciiDancing(day, time) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var mornNight = time.slice(-2);
  var dayIndex = daysOfWeek.indexOf[day];

  var shruggieDance = dancer([[
    '¯\\_(ツ)_/¯',
    '_/¯(ツ)¯\\_',
    '¯\\_(ツ)¯\\_',
    '_/¯(ツ)_/¯'
  ]]);

  if (mornNight === 'am') {
    return kirbyDance(dayIndex);
  }else{
    return dancer(dayIndex);
  }
}

//if name entered at cli
if (require.main === module) {
  commandLineName = process.argv.pop();
  var theGreeting = greet(commandLineName);
  console.log(theGreeting.greeting);
  console.log(theGreeting.currentDay);
  console.log(theGreeting.currentTime);
}
module.exports = greet;
