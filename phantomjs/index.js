// const phantomRequest = require('./phantom_request');
const curlRequest = require('./curl-request');

// Shorten URLs
// http://tinyurl.com/jcln2o2
// https://goo.gl/sKXWhn
// http://bit.ly/2hkWfpP

const REGEX_META = /\<meta\s(?:property|name)\=["|']*(.+?)["|']*\scontent\=["|']*(.+?)["|']*\>/g;

curlRequest(
  {
    url: 'https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c#.997ry6lt4'
  },
  (err, data) => {
    if (err) {
      return console.log(err);
    }

    let match;
    while ((match = REGEX_META.exec(data)) !== null) {
      console.log(`Name: ${match[1]} Property: ${match[2]}`);
    }

    return null;
  }
);
