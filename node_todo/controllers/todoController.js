const db = require('../db');
// const User = require('../models/User');
// const Todo = require('../models/Todo');
// get all users with pagination and title fiter
// const getAllUsers = async (req, res) => {
//     const { page = 1, limit = 10, title } = req.query;
//     const skip = (page - 1) * limit;
//     try {
//         const users = await User.find({ title }).skip(skip).limit(limit);
//         const users = await db.execute('SELECT * FROM users WHERE title = ? LIMIT ?, ?', [title, skip, limit]);
//         const users = await db.query('SELECT * FROM users WHERE title = ? LIMIT ?, ?', [title, skip, limit]);
//         if (!users) {
//             return res.status(404).json({ message: 'No users found' });
//         }
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users' });
//     }
// }

// get all users
const getAllTodos = async (req, res) => {
    try {
        const [todos] = await db.execute('SELECT * FROM todos');
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos' });
    }
}
// create todo
const createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        // const [newTodo] = new Todo({ title, description });
        const[result]=await db.execute('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description]);
             const [newTodoRows] = await db.execute(
                'SELECT id, title, description FROM users WHERE id = ?',
                [result.insertId]
              );
          
              const newTodo = newTodoRows[0];
          
         
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo' });
    }
}
// get todo by id
const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await db.execute('SELECT * FROM todos WHERE id = ?', [id]);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching todo' });
    }
}
// update todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const todo = await db.execute('UPDATE todos SET title = ?, description = ? WHERE id = ?', [title, description, id]);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Error updating todo' });
    }
}
// delete todo by id
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await db.execute('DELETE FROM todos WHERE id = ?', [id]);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo' });
    }
}

const completeTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await db.execute('UPDATE todos SET completed = true WHERE id = ?', [id]);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Error completing todo' });
    }
}
// export all functions
module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
    completeTodo
}