const StudentController = require('../controllers/student');
const express = require('express');
const router = express.Router();

const controller = new StudentController();

router.get('/:id([0-9]{10})', controller.getByID);

router.get('/:name([a-zA-Z]+)', controller.getByName);

router.get('/year/:year([0-9]+)', controller.getByYear);

router.get('/generation/:generation([0-9]+)', controller.getByGen);

router.put('/pass-a-year', controller.passYear);

router.post('/', controller.post);

module.exports = router;



