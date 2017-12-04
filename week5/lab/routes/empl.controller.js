var Employee = require('./empl.model');

module.exports.post = function (req, res) {
    if (req.method === 'POST') {

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
            .then(function () {
                msg = 'Employee was Saved';
                return;
            })
            .catch(function (err) {
                msg = err;
                return;
            }).then(function (err) {
                console.log(msg);
                res.send(msg);
            });

    } else {
        res.render('index', {
            title: 'home',
            message: ''
        });
    }
}

module.exports.getAll = function (req, res) {
    Employee
        .find()
        .exec()
        .then(function (results) {
            console.log(results);
            res.header("Content-Type",'application/json');
            console.log(res.header()._headers);
            //console.log(res.contentType());
            res.send(results);
        });
}


module.exports.getOne = function (req, res) {
    Employee
        .findById(req.params.employeeid)
        .where('_id').equals(req.params.employeeid)
        .exec()
        .then(function (results) {
            res.header("Content-Type",'application/json');
            res.send(results);
        });
}

module.exports.put = function (req, res) {
    var id = req.params.employeeid;
    var msg = '';
    console.log(id);
    console.log(req.params);
    if (req.method === 'PUT') {

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
            .then(function () {
                msg = 'data has been updated';
                finish();
            })
            .catch(function (err) {
                console.log(err);
                msg = 'data has NOT been updated';
                finish();
            });

    } else {
        finish();
    }
    function finish() {
        Employee
            .findOne({ '_id': id })
            .exec()
            .then(function (results) {
                res.header("Content-Type",'application/json');
                res.send(results);
            })
            .catch(function () {
                res.header("Content-Type",'application/json');
                res.send('Sorry ID not found');
            });
    }
}

module.exports.delete = function (req, res) {
    var id = req.params.employeeid;
    var removed = "ID was not found";
    if (id) {
        Employee.remove({ _id: id })
            .then(function () {
                removed = `${id} has been removed`;
                finish();
            })
            .catch(function (err) {
                removed = `${id} has not been removed`;
                finish();
            });
    } else {
        finish();
    }
    function finish() {
        res.header("Content-Type",'application/json');
        res.send(removed);
    }
}