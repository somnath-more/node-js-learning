const db = require('../db');
// const User = require('../models/User');
// get all users with pagination
// const getAllUsers = async (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     const skip = (page - 1) * limit; 
//     try {
//         const users = await User.find().skip(skip).limit(limit);
//         const users = await db.execute('SELECT * FROM users LIMIT ?, ?', [skip, limit]);
//         const users = await db.query('SELECT * FROM users LIMIT ?, ?', [skip, limit]);
//         if (!users) {
//             return res.status(404).json({ message: 'No users found' });
//         }
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users' });
//     }
// }
// get all users
const getAllUsers = async (req, res) => {
    try {
        // const users = await User.find();
        // const users = await db.execute('SELECT * FROM users');
        const users = await db.query('SELECT * FROM users');
        if (!users) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}
// get user by id
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        // const user = await User.findById(id);
        const user = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        // const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}
// create user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // const newUser = new User({ username, email, password });
        const newUser = await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
}
// update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        // const user = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
       const user = await db.execute('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id]);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
}
// delete user by id
const deleteUserById = async (req,res) => {
    const { id } = req.params;
    try {
        // const user = await User.findByIdAndDelete(id);
        const user = await db.execute('DELETE FROM users WHERE id = ?', [id]);
        // const user = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
    
}

// exports all functions
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
}