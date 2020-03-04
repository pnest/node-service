const { Router } = require('express');

const route = Router();

module.exports = express => {
  express.use('/', route);

  route.get('/status', (req, res) => {
    res.json({ message: 'up' }).status(200);
  });

  route.head('/status', (req, res) => {
    res.status(200).end();
  });
};
