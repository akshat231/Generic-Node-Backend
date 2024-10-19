const logger = require('./utilities/logger');
const bodyParser = require('body-parser');
const config = require('config').get('server');
const { initializeServices } = require('./startup');
const middleware = require('./middleware');
const exceptionHandler = require('./middleware/exception-handler');
const apiRouter = require('./routes');

const createApp = async () => {
  logger.info('Starting App');
  const { app } = await initializeServices({
    mongo: true
  })
  app.use(middleware.router);
  app.use(exceptionHandler);
  const server = app.listen(config.get('port'), ()=> {
    logger.info(`Server running on port ${config.get('port')}`);
  })
}

createApp().catch((err) => {logger.error(`Error while starting app: ${err}`)
  process.exit(1);
});
