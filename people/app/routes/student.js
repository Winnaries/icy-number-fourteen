const StudentController = require('../controllers/student');
const express = require('express');
const router = express.Router();

const controller = new StudentController();

router.get('/', controller.get);

router.post('/', controller.post);

module.exports = router;



