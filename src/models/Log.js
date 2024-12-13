const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    method: { type: String, required: true },
    endpoint: { type: String, required: true },
    statusCode: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);
