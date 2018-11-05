var goodMorning = require('./greeting');
var assert = require('assert');

describe('goodMorning', function(){
    it ('should return "Good morning Mugsy" when u type Mugsy in the command line', function(){
        var greeting = goodMorning();
       assert.equal(greeting, "Good morning Mugsy");     
    });
});

goodMorning();