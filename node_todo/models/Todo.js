const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// id INT AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(255),
// description TEXT,
// completed BOOLEAN DEFAULT false,
// user_id INT,
// FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });
module.exports = mongoose.model('Todo', todoSchema);
