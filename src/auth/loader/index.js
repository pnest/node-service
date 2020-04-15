const config = require('../../config');
const logger = require('../../logging/loader');

module.exports = async () => {
  await require('../../db/loader/mongo.js');

  logger.info('✌️  MongoDB is loaded');
};
