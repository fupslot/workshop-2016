const config = require('node-config-files')(
  // Must be relative to root folder
  './node-config-files-app/config',
  {
    debug: true
  }
);

console.log(JSON.stringify(config, void 0, 2));
