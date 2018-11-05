const emoji = require('node-emoji');

//test to see if coffee emoji exists
// console.log(emoji.get('coffee'));

//set parameter default to 'insert cool name'
module.exports = function greet(name='insert cool name', myEmoji){
  let sentence = 'Hello, my name is ' + name;
  //check if emoji exists and if it does, add it to sentence
  if(myEmoji){
    sentence += emoji.get(myEmoji);
  }
  return sentence;
};
