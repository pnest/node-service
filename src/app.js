const http = require('http');
const config = require('./config');
const Logger = require('./loaders/logger');

async function startServer() {
  const app = await require('./loaders')();

  const server = http.createServer(app);
  server.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();
