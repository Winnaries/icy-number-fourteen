const StudentModel = require('../models/student');

const model = new StudentModel();

class StudentController {

    async getByID(req, res) {
        console.log(`Finding student with ID ${req.params.id}`);
        res.json(await model.findOne({ student_id: req.params.id }));
    }

    async getByName(req, res) {
        console.log(`Finding student with name ${req.params.name}`);
        const regex = new RegExp(`.*${req.params.name}.*`);
        const fields = [
                {'name_en.nick': { $regex: regex }},
                {'name_en.first': { $regex: regex }},
                {'name_en.last': { $regex: regex }},
            ];
        res.json(await model.find({ $or: fields }));
    }

    async getByYear(req, res) {
        console.log(`Listing students on Year ${req.params.year}`);
        res.json(await model.find({ year: { $eq: req.params.year } }));
    }

    async getByGen(req, res) {
        console.log(`Listing students on Year ${req.params.generation}`);
        res.json(await model.find({ generation: { $eq: req.params.generation } }));
    }

    async post(req, res) {
        res.json(await model.insert(req.body));
    }

    async passYear(req, res) {
        await model.passYear();
        console.log('A year have progress... :D');
        res.send('A year have progressed... :D');
    }

}

module.exports = StudentController;