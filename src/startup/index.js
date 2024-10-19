const logger = require('../utilities/logger');
const { initializeMongo } = require('../databases/mongo');
const app = require('express')();

const initializeServices = async (options) => {
    const response = {};
    logger.info('Initializing services');
    if (options && options.mongo) {
        logger.info('Initializing MongoDB service');
        await initializeMongo();
    }

    response.app = app;
    logger.info('BoilerPlate Initialized')
    return response;
}

module.exports = {
    initializeServices
}