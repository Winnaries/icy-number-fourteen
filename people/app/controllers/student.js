const StudentModel = require('../models/student');

const model = new StudentModel();

class StudentController {

    get(req, res) {

    }

    post(req, res) {
        res.send(model.insert(req.body));
    }

}

module.exports = StudentController;