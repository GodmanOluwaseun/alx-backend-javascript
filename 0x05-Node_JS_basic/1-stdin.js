/**
 * program executed via command line.
 *
 * @description - An interactive user program to greet user.
 */

const readline = require('readline');

const isPipedInput = !process.stdin.isTTY;

const rl = readline.createInterface({
  input: process.stdin,
  output: isPipedInput ? undefined : process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

if (isPipedInput) {
  rl.question('', (userName) => {
    console.log(`Your name is: ${userName}`);
    console.log('This important software is now closing');
    rl.close();
  });
} else {
  rl.question('', (userName) => {
  console.log(`Your name is: ${userName}`);
  rl.close();
  });
};
