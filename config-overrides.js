// config-overrides.js
// see: https://github.com/timarney/react-app-rewired

const path = require('path');
const fs = require('fs');

const rewireBabelLoader = require('react-app-rewire-babel-loader');

// helpers

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = function override(config) {
  // white-list some npm modules to the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-include

  config = rewireBabelLoader.include(
    config,
    resolveApp('node_modules/@sustainableui/sui-headless-react')
  );

  // black-list some modules from the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-exclude

  // config = rewireBabelLoader.exclude(
  //   config,
  //   /(node_modules)/
  // );

  return config;
};
