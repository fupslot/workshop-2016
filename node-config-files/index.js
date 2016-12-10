const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');
const assign = require('lodash.assign');
const omit = require('lodash.omit');
const pkg = require('./package.json');

module.exports = (configFolderPath, options) => {
  const appRootFolder = __dirname.substr(0, __dirname.indexOf('node_modules'));

  if (!configFolderPath || configFolderPath.length === 0) {
    // If no a config folder path is passed then assume that it's located at
    // an application root.
    configFolderPath = path.resolve(appRootFolder, 'config');
  }

  options = assign({
    debug: false
  }, options);

  const env = process.env.NODE_ENV || 'development';

  if (options.debug) {
    console.log(colors.green(`(${pkg.name}) NODE_ENV: ${env}`));
  }

  const packageConfigFilePath = path.resolve(appRootFolder, 'package.json');

  let packageConfig = {};
  try {
    packageConfig = omit(
      require(packageConfigFilePath),
      ['dependencies', 'devDependencies']
    );
  } catch (e) {
    if (options.debug) {
      console.error(
        colors.red(
          `(${pkg.name}) Error: Can\'t find "package.json" file, path ${packageConfigFilePath}`
        )
      );
    }
  }

  /**
   * readConfig
   * @param  {string} configFileName Config file name
   * @return {object}
   */
  const readConfig = (configFileName) => {
    const configFilePath = path.resolve(
      appRootFolder,
      configFolderPath,
      configFileName
    );

    let obj = {};
    try {
      obj = require(configFilePath);
      if (typeof obj === 'function') {
        obj = obj(packageConfig);
      }
    } catch (e) {
      if (options.debug) {
        console.error(
          // eslint-disable-next-line quotes
          colors.red(
            `(${pkg.name}) Error: Can\'t find a "${configFileName}.js" file, path ${configFilePath}`
          )
        );
      }
    }

    return obj;
  };

  const configNames = [];
  const configFileNames = [];
  let configFilePathes = [];

  const configFilesFolder = path.resolve(appRootFolder, configFolderPath);
  try {
    configFilePathes = fs.readdirSync(configFilesFolder);
  } catch (e) {
    if (options.debug) {
      console.error(
        colors.red(`(${pkg.name}) Error: Can\'t read ${configFilesFolder}`)
      );
    }
  }

  for (let i = 0; i < configFilePathes.length; i++) {
    const fileName = path.basename(configFilePathes[i], '.js');
    configFileNames.push(fileName);

    const configName = fileName.substr(0, fileName.indexOf('.'));
    if (!configNames.includes(configName)) {
      configNames.push(configName);
    }
  }

  const configObj = { common: {}, env: {} };

  for (let i = 0; i < configNames.length; i++) {
    if (configFileNames.includes(`${configNames[i]}.config`)) {
      configObj.common[configNames[i]] = readConfig(
        `./${configNames[i]}.config`
      );
    }

    if (configFileNames.includes(`${configNames[i]}.${env}.config`)) {
      configObj.env[configNames[i]] = readConfig(
        `./${configNames[i]}.${env}.config`
      );
    }
  }

  return assign({},
    {
      common: configObj.common,
      env: configObj.env
    },
    {packageConfig}
  );
};
