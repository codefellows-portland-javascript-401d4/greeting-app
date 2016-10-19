//here's the greet implementation
var figlet = require('figlet');

function greet(name) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;
  var name = name || 'friend';
  var today = days[new Date().getDay()];
  var hello = 'Hello ' + name + '.  ';
  var goodDay = 'Today is \n';
  return hello/* + goodDay + data*/;    

  // figlet(today, function(err, data) {
  //   if(err) {
  //     console.log('Something went wrong...');
  //     console.dir(err);
  //     return;
  //   }
  // });
}

module.exports = greet;