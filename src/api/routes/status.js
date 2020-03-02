const { Router } = require('express');

const route = Router();

module.exports = express => {
  express.use('/', route);

  route.get('/status', (req, res) => {
    return res.json({ message: 'up' }).status(200);
  });
};
