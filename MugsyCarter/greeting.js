goodMorning= function(){
     var name = process.argv.pop();
    console.log('name is ', name);
    console.log('Good morning '+ name);
    process.argv.push(name);
    return('Good morning '+ name);
};

goodMorning();
module.exports = goodMorning;