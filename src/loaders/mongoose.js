const mongoose = require('mongoose');
const { Db } = require('mongodb');
const config = require('../config');

module.exports = async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
  return connection.connection.db;
};
