const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

const logger = require('./logger');

module.exports = async () => {
  const mongoConnection = await mongooseLoader();
  logger.info('✌️  DB loaded and connected');

  // load specific web framework configuration
  const app = await expressLoader();
  logger.info('✌️  Created express app');

  return app;
};
