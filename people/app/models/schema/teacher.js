const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    faculty: String,
    department: String,
    name_en: {
        first: String,
        last: String
    },
    name_th: {
        first: String,
        last: String
    },
    phone: [String],
    email: [String],
    office: {
        building: String,
        room: Number
    }
});

module.exports = teacherSchema;