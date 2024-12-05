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

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.question('', (userName) => {
  process.stdout.write(`Your name is: ${userName}\n`);
  if (isPipedInput) {
    process.stdout.write('This important software is now closing\n');
  }
  rl.close();
  });
