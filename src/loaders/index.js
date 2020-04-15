const errorManagementLoader = require('./errorManagement');
const expressLoader = require('./express');
const logger = require('../logging/loader');

module.exports = async () => {
  await errorManagementLoader();
  logger.info('✌️  Error management activated');

  // const mongoConnection = await mongooseLoader();
  // logger.info('✌️  DB loaded and connected');

  // load specific web framework configuration
  const app = await expressLoader();
  logger.info('✌️  Created express app');

  return app;
};
