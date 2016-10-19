var exec = require('child_process').exec;
var child = exec('node cli.js "Jane Doe"');
child.stdout.on('data', function(data) {
    console.log(data);
    exec('crappy\n');
});
child.on('close', function(code) {
    console.log(code)
});