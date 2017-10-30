var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "firstName is required"]
    },
    lastName : {
        type : String,
        required : [true, "lastName is required"]
    },
    department : {
        type : String,
        required : [true, "department is required"]
    },
    startDate : {
        type : Date,
        "default" : Date.now
    },
    jobTitle : {
        type : String,
        required : [true, "jobTitle is required"]
    },
    salary : {
        type : Number,
        required : [true, " salary is required"]
    }
});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;