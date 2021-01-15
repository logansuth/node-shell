const pwd = require('./pwd');
const fs = require('fs');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === 'pwd') {
    pwd();
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat') {
    cat(cmd[1]);
  } else {
    curl(cmd[1]);
  }
});
