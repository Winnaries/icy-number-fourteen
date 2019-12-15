const express = require('express');
const students = require('./routes/student');
const teachers = require('./routes/teacher');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/students', students);
app.use('/teachers', teachers);
app.listen(3000);