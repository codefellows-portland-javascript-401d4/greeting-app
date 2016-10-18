![cf](http://i.imgur.com/7v5ASc8.png) Lab: Modular Patterns and Testing
===

## Resources
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Chai assert docs](http://chaijs.com/api/assert/)
* [Mocha docs](http://mochajs.org/#getting-started)

##Description:
This assignment will have you create a simple Javascript module that will be exported 
using the Node modular pattern we went over in class. 

The design of the module is up to you, but the premise is something that can be used to 
construct a greeting from input parameters. (e.g. take a name as a parameter and return `'hello ' + name`).  

You should write tests for the features of the greeting module.  

Include
- **.eslintrc** file in your repository 

Your submission should be a link to your pull request.  

##Bonus:
For an extra point, create a command line utility that will be run using something like 
`node greet.js 'some name'` that will pass the input contained 
in that argument to the greet function and output the result to the screen. For example:

```sh
> node greet.js 'Jane Doe'
hello Jane Doe
```

For a second bonus point, write a test that makes sure that the arguments are being 
processed correctly.

##Rubric:

  * Proper Code Styling: 2pts
  * Proper Submission: 2pts
  * Mocha assert Test: 3pts
  * Use of Modular Pattern/design of greet object/function: 3pts
