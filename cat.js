const fs = require('fs');

function cat(file, done) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      done('something is horribly wrong');
    }
    done(data);
  });
}

module.exports = cat;
