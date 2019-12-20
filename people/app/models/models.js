const conn = require('./config/database');
const url = require('./config/url');

const studentSchema = require('./schema/student');
const teacherSchema = require('./schema/teacher');

const Student = conn.model('Student', studentSchema);
const Teacher = conn.model('Teacher', teacherSchema);

module.exports.Student = Student;
module.exports.Teacher = Teacher;
