const StudentsControllers = require("./../../lib/controller/StudentController");

describe("Test in StudentsControllers class", () => { 
    test("Testing if StudentsController is defined as a class", () => { 
        const students_new = new StudentsControllers();
        expect(students_new).toBeDefined();
    });
 
});