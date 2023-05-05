const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://fornitejimmy23:bigcappy23@cockster0.dg3xywk.mongodb.net', //besoin de la database
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Database'))
.catch((err) => console.log(err));

const taskSchema = new mongoose.Schema({title: String, description: String, status: String});

const Task = mongoose.model('Task',taskSchema)

app.get('/getTask', async (req,res) => {
    const tasks = await Task.find({})
    res.json(tasks)
    console.log(res)
})

app.post('/postTask', async (req,res) => {
    const {title, description, status} = req.body
    const newTask = new Task({title, description, status})
    await newTask.save()
    res.status(201).json(newTask)
})

app.put('/updateTask', function(req, res) {
    const {title, description, status} = req.body
    console.log('Try to update : '+ title)

    Task.findByIdAndUpdate(req.body.id, req.body)
});

app.delete('/deleteTask', function(req, res) {
    Task.findByIdAndDelete((req.body.id))
})

app.listen(3001, () => {
    console.log('Server listening on port 3001')
})