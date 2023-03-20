const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const taskController = require('./controller/task.controller')
const transactionController = require('./controller/transaction.controller')



const app = express();
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/transactions', (req, res) => {
    transactionController.getTransactions().then(data => res.json(data));
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})
