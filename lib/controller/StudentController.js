const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentController {
    static getAllInfo() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllInfo(students);
    }

    static certifiedStudentsEmail() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.certifiedStudentsEmail(students);
    }

    static studentsWithMoreThan500Credits() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.studentsWithMoreThan500Credits(students);
    }
}

module.exports = StudentController;