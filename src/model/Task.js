
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({id: Schema.types.ObjectId, title: String, description: String, status: String});
let Task = mongoose.model('Task', taskSchema);;
module.exports = Task;