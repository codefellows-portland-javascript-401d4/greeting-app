function greet() {
  var name = process.argv.pop();
  console.log('hello, ', name);
  process.argv.push(name);
  return('hello,' + name);
}

greet();

module.exports = greet;