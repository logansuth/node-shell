const request = require('request');

function curl(url, done) {
  request(url, (err, response, body) => {
    if (err) {
      done(err);
    } else {
      done(body);
    }
  });
}

module.exports = curl;
