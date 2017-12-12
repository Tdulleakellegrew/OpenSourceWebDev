var Employee = require('./empl.model');

function JSONresponse(res, status, content) {
    res.status(status).json(content);
}

module.exports.post = function (req, res) {

    var msg = '';
    console.log(req.body);
    Employee.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        department: req.body.dep,
        //startDate: req.body.review,
        jobTitle: req.body.jTitle,
        salary: req.body.salary
    })
        .then(function (dataSaved) {
            console.log(msg);
            JSONresponse(res, 201, dataSaved);
        })
        .catch(function (err) {
            console.log(err);
            JSONresponse(res, 500, err);
        });
}

module.exports.getAll = function (req, res) {
    Employee
        .find()
        .exec()
        .then(function (results) {
            console.log(results);
            res.header("Content-Type", 'application/json');
            console.log(res.header()._headers);
            //console.log(res.contentType());
            JSONresponse(res, 200, results);
        })
        .catch(function (err) {
            JSONresponse(res, 500, err);
        });
}


module.exports.getOne = function (req, res) {
    Employee
        .findById(req.params.employeeid)
        .where('_id').equals(req.params.employeeid)
        .exec()
        .then(function (results) {
            JSONresponse(res, 200, results);
        })
        .catch(function (err) {
            JSONresponse(res, 500, err);
        });
}

module.exports.put = function (req, res) {
    var id = req.params.employeeid;
    var msg = '';
    console.log(id);
    console.log(req.params);
    //id = req.body._id;
    console.log(id);
    Employee
        .findById(id)
        .exec()
        .then(function (EmployeeData) {
            // figure out why the data is not saving.      
            console.log(req.body);
            EmployeeData.firstName = req.body.fName,
            EmployeeData.lastName = req.body.lName,
            EmployeeData.department = req.body.dep,
            //EmployeeData.//startDate: req.body.review,
            EmployeeData.jobTitle = req.body.jTitle,
            EmployeeData.salary = req.body.salary
            return EmployeeData.save();
        })
        .then(function (data) {
            JSONresponse(res, 200, data);
        })
        .catch(function (err) {
            //console.log(msg);
            JSONresponse(res, 500, err);
        });
}

module.exports.delete = function (req, res) {
    var id = req.params.employeeid;
    var removed = "ID was not found";
    if (id != null) {
        Employee.remove({ _id: id })
            .then(function (data) {
                JSONresponse(res, 204, null);
            })
            .catch(function (err) {
                JSONresponse(res, 400, err);
            });
    } else {
        console.log(msg);
        JSONresponse(res, 500, {"message" : "ID is required"});
    }
}