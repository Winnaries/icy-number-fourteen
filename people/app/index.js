const express = require('express');
const mongoose = require('mongoose');
const config = require('../config/database.js');
const models = require('../database/models.js');

const Teacher = models.Teacher;
const Student = models.Student;

const app = express();

mongoose.connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connected...'))
    .catch(err => console.error('Connection failed...'));
