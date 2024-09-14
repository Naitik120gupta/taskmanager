const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    task_id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ['Done', 'Pending', 'In-Progress'],
        default: 'Pending'
    },
    due_date: { type: Date },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium'
    }
});

const user= mongoose.model('user', userSchema);
module.exports=user;
