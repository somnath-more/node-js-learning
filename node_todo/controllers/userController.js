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
        const [users] = await db.execute('SELECT * FROM users');
    
        if (!users || users.length === 0) {
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
        const [user] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        // const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
       console.log(user);
       
        if (!user || user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user[0]);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}
// create user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const [result] = await db.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [username, email, password]
      );
      console.log(result);
      
  
      const [newUserRows] = await db.execute(
        'SELECT id, name, email FROM users WHERE id = ?',
        [result.insertId]
      );
  
      const newUser = newUserRows[0];
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  };
  
// update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        // const user = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
       const result = await db.execute('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id]);
       console.log(result);
       
       if (!result || result.length !== 0) {
            // hit query based on id
            const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
            if (!user || user.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
       
        res.status(200).json(user);
       }
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
        const [user] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
        // const user = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (!user || user.affectedRows === 0) {
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