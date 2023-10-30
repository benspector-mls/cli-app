const prompt = require('prompt-sync')();

// Helper Functions
const askForName = () => {
  console.log("Welcome!")
  const name = prompt('What is your name? ');
  console.log(`hello ${name}`);
  return name;
}

// Main "runner" function
const main = () => {
  const username = askForName();

}
main();