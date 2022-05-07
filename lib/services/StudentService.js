class StudentService{
    static getAllInfo(students){
        return students;
    }

    static certifiedStudentsEmail(students){
        const certifiedStudents = students.filter(student => student.haveCertification === true);
        return certifiedStudents.map(student => student.email);
    }

    static studentsWithMoreThan500Credits(students){
        return students.filter(student => student.credits > 500);
    }
}

module.exports = StudentService;