/* eslint-disable */
const cp = require("child_process");

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36';

module.exports = (options, callback) => {
  options = Object.assign({
    ua: process.env.CURL_USER_AGENT || options.ua || USER_AGENT,
    timeout: 15000
  }, options);

  const child = cp.spawn("curl", [
    "--silent",
    "--user-agen",
    options.ua,
    "--location",
    "--request",
    "GET",
    options.url
  ]);

  child.stdout.on("data", function (data) {
    const buf = Buffer.from(data);
    callback(null, buf.toString());
  });

  child.stderr.on("data", function (data) {
    const buf = Buffer.from(data);
    callback(buf.toString());
  });
};
