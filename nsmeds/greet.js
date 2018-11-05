function greet(name) {
  name = name || 'my new friend';
  return 'hello ' + name;
}

console.log(greet(process.argv[2]));

module.exports = greet;