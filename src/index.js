const prompt = require('prompt-sync')();

// Helper Functions
const askForName = () => {
  console.log("Welcome!")
  const name = prompt('What is your name? ').trim();
  console.log(`hello ${name}`);
  return name;
}

const showOptions = () => {
  console.log("Here are your options:")
  console.log("1 - play a guessing game")
  console.log("2 - words of wisdom")
  console.log("3 - cheer you on!")
  console.log("Any other key - exit")
}

const sayGoodbye = (name) => {
  console.log(`See ya later ${name}`);
}

// Main "runner" function
const main = () => {
  const username = askForName();
  showOptions();
  sayGoodbye(username);
}
main();