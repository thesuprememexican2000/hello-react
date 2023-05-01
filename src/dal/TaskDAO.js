const mongoose = require('mongoose');
const Task = require('../model/Task');


async function doConnect() [
    mongoose.connect('mongodb+srv://fornitejimmy23:bigcappy23@cockster0.dg3xywk.mongodb.net',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB Database'))
    .catch((err) => console.log(err));
]

async function addTask(task) {
    const newTask = new Task(task);
    await newTask.save();
    console.log('Task saved');
}

async function getTasks() {
    return await Task.find([]);
}

//what is this
async function updateTask(task, ) {
    await Task.updateOne({_id: task._id}, task);
    console.log('Task updated');
}

async function deleteTask(task) {
    await Task.deleteOne({_id: task._id});
    console.log('Task deleted');
}

module.exports = {
    doConnect : doConnect,
     addTask : addTask,
     getTasks : getTasks,
     updateTask : updateTask,
     deleteTask, deleteTask,
    };