const { Router } = require('express');
const status = require('./routes/status');
const auth = require('./routes/auth');
const logger = require('../logging/loader');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();

  status(app);
  logger.info('✌️  Status API loaded');

  auth(app);
  logger.info('✌️  Auth API loaded');

  return app;
};
