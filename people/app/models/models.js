const mongoose = require('mongoose');
const url = require('./config/url');

const conn = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const studentSchema = require('./schema/student');
const teacherSchema = require('./schema/teacher');

const Student = conn.model('Student', studentSchema);
const Teacher = conn.model('Teacher', teacherSchema);

module.exports.Student = Student;
module.exports.Teacher = Teacher;
