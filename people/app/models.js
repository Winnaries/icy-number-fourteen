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

const studentSchema = new Schema({
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
    phone: [String],
    email: [String],
    facebook: String,
    line_id: String,
    instagram: String,
    advisor: teacherSchema
});

const Teacher = mongoose.model('Teacher', teacherSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports.Teacher = Teacher;
module.exports.Student = Student;