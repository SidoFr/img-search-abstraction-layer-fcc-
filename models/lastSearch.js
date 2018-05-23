const mongoose = require('mongoose');

const latestSchema = new mongoose.Schema({
    what: { type: String },
    when: { 
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Latest', latestSchema);