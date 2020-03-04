const http = require('http');
const config = require('./config');
const logger = require('./loaders/logger');

async function startServer() {
  const app = await require('./loaders')();

  const server = http.createServer(app);
  server.listen(config.port, err => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }
    logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();
