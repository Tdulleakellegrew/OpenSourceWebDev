var Employee = require('./empl.model');

module.exports.home = function(req, res){
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
        .then(function(){
            msg = 'Employee was Saved';
            return;
        })
        .catch(function(err){            
            msg = err;
            return err;
        }).then(function(err){
            res.render('index', { 
                title: 'home',
                message : msg,
                error: err
             });
        });   
              
    } else {
        res.render('index', { 
            title: 'home',
            message : ''
        }); 
    }
}

module.exports.view = function(req, res){
    Employee
    .find()
    .exec()
    .then(function(results){
         res.render('view', { 
             title: 'View Results',
             results : results
         });
    });
}

module.exports.update = function(req, res){
    var id = req.params.id;
    var msg = '';
    
    if (req.method === 'POST') {
         
        id = req.body._id;

        Employee
            .findById(id)
            .exec() 
            .then(function(EmployeeData) {
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
            .then(function(){
                msg = 'data has been updated';
                finish();
            })
            .catch(function(err){
                console.log(err);
                msg = 'data has NOT been updated';
                finish();
            });
        
    } else {
        finish();
    }
    function finish(){
        Employee
        .findOne({ '_id': id })
        .exec()
        .then(function(results){    
            res.render('update', { 
                title: 'Update Results',
                message: msg,
                results : results
            });
        })
        .catch(function(){
            res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        });
    }
}

module.exports.delete = function(req, res){
    var id = req.params.id;
    var removed = "ID was not found";
    if(id){
      Employee.remove({ _id: id })
      .then(function(){            
          removed = `${id} has been removed`;
          finish();
      })
      .catch(function (err) {            
          removed = `${id} has not been removed`;
          finish(); 
      });              
    }else {
      finish();
    }
    function finish(){
      res.render('delete', { 
          title: removed,
          message: removed
      });
    }
}