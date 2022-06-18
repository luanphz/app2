const { runServer, createApplyWebpackMiddleware } = require('dev-server');
const federationConfig = require('./federation.config');
const rootFederationConfig = require('../federation.config');
runServer({
  port: rootFederationConfig[federationConfig().name].devPort,
  middlewares: [createApplyWebpackMiddleware(require('./webpack.config'))],
});
