const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { getters: true }
});

module.exports = ReactionSchema;  // Make sure it's exporting the schema
