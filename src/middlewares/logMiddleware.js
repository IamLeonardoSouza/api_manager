const Log = require('../models/Log');
const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({ node: process.env.ELASTICSEARCH_URI });

const logMiddleware = async (req, res, next) => {
    res.on('finish', async () => {
        const logEntry = {
            method: req.method,
            endpoint: req.originalUrl,
            statusCode: res.statusCode,
            timestamp: new Date()
        };

        // Salvar no MongoDB
        const log = new Log(logEntry);
        await log.save();

        // Salvar no Elasticsearch
        await esClient.index({
            index: 'api-logs',
            body: logEntry
        });
    });
    next();
};

module.exports = logMiddleware;
