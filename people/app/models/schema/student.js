const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const teacherSchema = require('./teacher.js');

const studentSchema = new Schema({
    year: Number,
    generation: Number,
    student_id: Number,
    name_en: {
        nick: String,
        first: String,
        last: String
    },
    name_th: {
        nick: String,
        first: String,
        last: String
    },
    dob: Date,
    phone: [String],
    email: [String],
    facebook: String,
    line_id: String,
    instagram: String,
    advisor: teacherSchema
});

module.exports = studentSchema;