/**
 * program executed via command line.
 *
 * @description - An interactive user program to greet user.
 */

const readline = require('readline');

const isPipedInput = !process.stdin.isTTY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (userName) => {
  console.log(`Your name is: ${userName}`);
  if (isPipedInput) {
    console.log('This important software is now closing');
  }
  rl.close();
});
