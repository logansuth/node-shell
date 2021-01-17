const pwd = require('./pwd');
const fs = require('fs');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('> ');
};

process.stdin.on('data', (data) => {
  const args = data.toString().trim().split(' ');
  const cmd = args[0];
  const arg = args[1];

  switch (cmd) {
    case 'pwd':
      pwd(done);
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(arg, done);
      break;
    case 'curl':
      curl(arg, done);
      break;
    default:
      done('prompt ');
  }
});
