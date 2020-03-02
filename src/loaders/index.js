const expressLoader = require('./express');
const Logger = require('./logger');

module.exports = async () => {
  // load specific web framework configuration
  const app = await expressLoader();
  Logger.info('✌️  Created app');

  return app;
};
