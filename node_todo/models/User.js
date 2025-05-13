
// User model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// id INT AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(100),
// email VARCHAR(100) UNIQUE,
// role ENUM('admin', 'user') NOT NULL,
// password VARCHAR(255) NOT NULL

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },   
     createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
// Hash password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
// create a if not exists User exports
module.exports = mongoose.model('User', userSchema);
