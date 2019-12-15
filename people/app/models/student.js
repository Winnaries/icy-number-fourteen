const mongoose = require('mongoose');
const Models = require('./models');
const Student = Models.Student;

class StudentModel {
    async insert(args) {
        let student = new Student(args);
        student = await student.save()
            .then(() => {})
            .catch(err => console.log(err));
        return student;
    }
}

module.exports = StudentModel;