const cheerio = require('cheerio');
const phantom_request = require('./phantom_request');

// 'https://fupslot.github.io/workshop-2016/media-queries/index.html',
phantom_request(
  {
    url: 'https://fupslot.github.io/workshop-2016/media-queries/index.html'
  },
  (err, data) => {
    if (err) {
      return console.log(err);
    }
    const dom = cheerio.load(data);

    const attrs = {};

    dom('meta').each(function(i, node) {
      const propName = node.attribs.name || node.attribs.property;
      if (propName && propName.startsWith('og:')) {
        attrs[propName] = node.attribs.content;
      }
    });

    console.log(attrs);

    return null;
  }
);
