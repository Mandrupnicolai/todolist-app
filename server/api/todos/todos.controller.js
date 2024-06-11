let todos = [];

exports.getTodos = (req, res) => {
    res.status(200).json(todos);
};

exports.createTodo = (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).send(todo);
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.text = text !== undefined ? text : todo.text;
        todo.completed = completed !== undefined ? completed : todo.completed;
        res.status(200).send(todo);
    } else {
        res.status(404).send('Todo not found');
    }
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Todo not found');
    }
};
