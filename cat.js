const fs = require('fs');

function cat(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      process.stdout.write(err);
      return;
    }
    process.stdout.write(data);
  });
}

module.exports = cat;
