const express = require('express');
 const  {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
    completeTodo
} = require('../controllers/todoController');
    const router = express.Router();
    // Get all todos
    router.get('/', getAllTodos);

    // Get todo by id
    router.get('/:id', getTodoById);
    // Create todo
    router.post('/', createTodo);
    // Update todo
    router.put('/:id', updateTodo);
    // Delete todo
    router.delete('/:id', deleteTodo);
    // Mark todo as completed
    router.put('/:id/complete', completeTodo);
//  do i need export this router? if yes tell code
// Export the router
module.exports = router;
