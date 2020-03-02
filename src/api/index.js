const { Router } = require('express');
const status = require('./routes/status');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();
  status(app);

  return app;
};
