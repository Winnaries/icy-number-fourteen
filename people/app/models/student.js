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

    async findOne(args, ...select) {
        select = select.join(' ');
        const result = await Student.findOne(args);
        return result;
    }

    async find(args, ...select) {
        select = select.join(' ');
        const result = await Student.find(args);
        return result;
    }

    async passYear() {
        const result = await Student.updateMany({}, { $inc: { year: 1 } });
        console.log(`A total of ${result.nModified} have passed a year... :D`);
    }
}

module.exports = StudentModel;