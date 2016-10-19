var figlet = require('figlet');
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = days[new Date().getDay()];

figlet(today, function(err, data) {
  if(err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});