const fs = require('fs');

function ls(done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('something has gone horribly wrong');
    } else {
      done(files.join('\n'));
    }
  });
}

module.exports = ls;
