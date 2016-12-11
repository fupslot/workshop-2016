/* eslint-disable */
const cp = require("child_process");

module.exports = (options, callback) => {
  options = Object.assign({
    timeout: 15000
  }, options);

  const child = cp.spawn("phantomjs", [
    "./fetch.js",
    options.url,
    options.timeout,
    '--load-images=false'
  ]);

  child.stdout.on("data", function (data) {
    const buf = Buffer.from(data);
    callback(null, buf.toString());
  });

  child.stderr.on("data", function (data) {
    const buf = Buffer.from(data);
    callback(buf.toString());
  });

  // child.on("exit", function (code) {
  //   console.log("spawnEXIT:", code)
  // });
};
