const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Create a model named 'User' based on the LoginSchema
const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
