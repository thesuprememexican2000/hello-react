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

app.get('/tasks', async (req,res) => {
    const tasks = await Task.find({})
    res.json(tasks)
    console.log(res)
})

app.listen(3001, () => {
    console.log('Server listening on port 3000')
})