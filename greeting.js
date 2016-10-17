function greeting(userName){
    name = userName || 'Tim';
    console.log('userName');
    return 'Hello ' + name;
}

module.exports = greeting;