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


app.put('/updateTask/:id/:title/:desc/:status', async (req,res) => {
    const {id} = req.params
    const {title, description, status} = req.body
    const updateTask = {title, description, status}
    await Task.updateOne({_id: id}, updateTask)
    res.status(200).json({message: 'Task updated'})
})



app.delete('/deleteTask/:id', async (req,res) => {
    const id= req.params.id
    await Task.findByIdAndDelete(id)
    res.status(200).json({message: 'Task deleted'})
})


app.listen(3001, () => {
    console.log('Server listening on port 3001')
})