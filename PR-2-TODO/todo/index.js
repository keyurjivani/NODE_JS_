const express = require('express');
const app = express();

let db = [];
app.use(express.json());

app.get('/todos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(db);
});

// Route to get a single todo by ID
app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = db.find(todo => todo.id === todoId);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
});

app.get('/findbystatus', (req, res) => {
    const { isCompleted } = req.query;
  
    if (isCompleted === 'true') {
      const completedTodos = db.filter(todo => todo.isCompleted === true);
      res.json(completedTodos);
    } else if (isCompleted === 'false') {
      const incompleteTodos = db.filter(todo => todo.isCompleted === false);
      res.json(incompleteTodos);
    } else {
      res.status(400).json({ error: 'Invalid query parameter. Use isCompleted=true or isCompleted=false' });
    }
});

// Add a new todo with default isCompleted: false
app.post('/add', (req, res) => {
    let { title, isCompleted } = req.body;
    const todo = { 
        id: db.length + 1, 
        title: title, 
        isCompleted: isCompleted 
    };
    db.push(todo);
    
    res.send(todo);
});

// Update a todo by ID
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    let updatedTodo = null;
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === parsedId) {
            db[i] = { ...db[i], ...req.body };
        }
    }
    res.send(updatedTodo);
});

// Delete a todo by ID
app.delete('/delete/:id', (req, res) => {
    const todoIndex = db.findIndex((ele) => ele.id === req.params.id);
    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }

    const deletedTodo = db.splice(todoIndex, 1)[0];
    res.setHeader('Content-Type', 'application/json');
    res.send(deletedTodo);
});

const port = process.env.PORT || 8090;

app.listen(port, () => console.log(`Server running on port ${port}`));
