// ListModel.js
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setup schema
var postSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: String,
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    chats: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }]
});

module.exports = mongoose.model('Posts', postSchema);