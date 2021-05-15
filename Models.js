const mongoose = require('./db')

const schema = new mongoose.Schema({

    employeeId: {
        type: String,
        required: true 
        },
    name: { type: String, required: true },
    role: { type: String, required: true },
    salary: { type: Number, required: true },
});

module.exports = mongoose.model('employeee', schema);