const federationConfig = require('./federation.config.js');
module.exports = require('webpack-config/application.config.js')({
  context: __dirname,
  mainEntryFile: './src/index',
  federationConfig: federationConfig(),
  htmlTemplateFile: './public/index.hbs',
});
