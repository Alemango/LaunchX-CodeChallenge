const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath);
        const student = JSON.parse(rawdata);
        return student;
    }  
}

module.exports = Reader;
