const StudentController = require('./lib/controller/StudentController');
const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/v1/students', (req, res) => {
    res.json(StudentController.getAllInfo());
});

app.get('/v1/students/email', (req, res) => {
    res.json(StudentController.certifiedStudentsEmail());
});

app.get('/v1/students/credits', (req, res) => {
    res.json(StudentController.studentsWithMoreThan500Credits());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));