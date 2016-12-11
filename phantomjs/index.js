const phantom_request = require('./phantom_request');

// 'https://fupslot.github.io/workshop-2016/media-queries/index.html',
phantom_request(
  {
    url: 'http://phantomjs.org/api/command-line.html'
  },
  (err, data) => {
    if (err) {
      return console.log(err);
    }
    return console.log(data);
  }
);
