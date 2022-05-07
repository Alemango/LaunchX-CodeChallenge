# LaunchX-CodeChallenge

## Requerimientos
- Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
- Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
- Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## Dependencias
```json
"devDependencies": {
    "eslint": "^8.15.0",
    "jest": "^28.1.0"
  }
```
**eslint:** Lint es una dependencia que nos permite darle un formato homologado a nuestros archivos JS. Usando reglas podemos verificarlos e incluso autocooregirlos.
```json
"rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
    }
```
**jest:** Jest es una dependencia que usamos para hacer pruebas.
```json
"scripts": {
    "test": "node node_modules/jest/bin/jest"
    }
```
**express:** Usaremos express para poder inicializar un server local para poder correr nuestra API.
```json
"scripts": {
    "server": "node server.js"
    }
```
## Componentes

El proyecto cuenta con tres componentes generales:
- **Reader:** Consiste en un lector de archivos JSON y devuelve un objeto con toda la información.
```javascript
const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath);
        const student = JSON.parse(rawdata);
        return student;
    }  
}

module.exports = Reader;
```
- **StudentService:** Una clase que tiene tres métodos estáticos. Uno devuelve toda la información completa, el segundo a los email de los estudiantes certificados y el último a los alumnos con más de 500 créditos.
```javascript
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
```
- **StudentController:** Funciona como intermediario entre la API y la información. Manda llamar a los métodos anteriores.
```javascript
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
```

## La API
Podemos accrder a la información a través de tres url:
- `localhost:300/v1/students`
- `localhost:300/v1/students/email`
- `localhost:300/v1/students/credits`

En los tres casos nos devolverá un objeto JSON con los datos pedidos. Por ejemplo, la respuesta al predir los email:
![image](https://raw.githubusercontent.com/Alemango/LaunchX-CodeChallenge/master/lib/Captura%20de%20pantalla%20(290).png)

![image](https://user-images.githubusercontent.com/17634377/165870375-fe5a730a-eada-4abe-ac9c-42334e003b18.png)
**Imagen:**[ Carlo Gilmar](https://www.instagram.com/carlogilmar_/)
