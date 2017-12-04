class Model extends BaseModel {

    constructor() {
        super()  
        this.APIS = {
            Todo : 'public/todo.json',
            Employees : 'http://localhost:3001/api/v1/employees'
        }
    }
    
    getEmployees(){
        return this.http.get(this.APIS.Employees)
        .then(
            data => {
            return Components.employeesTable(data).then(html => { return this.dataBindModel.employeesTable = html });
        })
    }
    
    getTodoList() {
        return this.http.get(this.APIS.Todo)
                .then( data => {
                   return Components.todoTable(data).then(html => { return this.dataBindModel.todoTable = html })
                })
    }
    
    deleteTodo(evt) {
       const url = `${this.APIS.Todo}${evt.target.dataset.id}`
       return this.http.delete(url)
                .then( ()=>{
                   return this.dataBindModel.deleteResultMsg = 'Todo Deleted'                                
                }).catch( err => {
                    return this.dataBindModel.deleteResultMsg = 'Todo was NOT Deleted'                                 
                }).then( () => {
                   return this.getTodoList()
                })
    
    }
    
    saveTodo(evt) {
        
        let form = evt.target.form        
        if (!form.checkValidity()) {
            this.dataBindModel.saveResultMsg = 'All fields are required'
            return Promise.resolve()
        }
        console.log(this.dataBindModel.dep);
        const data = {
           fName : this.dataBindModel.fName,
           lName : this.dataBindModel.lName,
           dep : this.dataBindModel.dep,
           jTitle : this.dataBindModel.jTitle,
           salary : this.dataBindModel.salary
        } 
        console.log(data);                   
        return this.http.post(this.APIS.Employees, data)
                .then( data => {
                   this.dataBindModel.saveResultMsg = 'Employee Saved'
                   return data
                }).catch( err => {
                   this.dataBindModel.saveResultMsg = 'Employee was NOT Saved'   
                   return err
                })  
    }
    
    goToUpdatePage(evt) {
        this.redirect('update',{id: evt.target.dataset.id})
        return Promise.resolve()
    }
        
    updatePageLoad() {
        const url = `${this.APIS.Employees}${this.urlParams().get('id')}`
        console.log("Update Called");
        return this.http.get(url).then( data => {           
            this.dataBindModel = {FirstName: data.fisrtName, LastName: data.lastName,Department : data.department, JobTtitle : data.jobTitle, Salary: data.salary, id: data.id }
            return data
        })     
    }

    updateTodo(evt) {
        let form = evt.target.form        
         if (!form.checkValidity()) {
             this.dataBindModel.updateResultMsg = 'All fields are required'
             return Promise.resolve()
         }
        const data = {
            title : this.dataBindModel.title,
            completed : this.dataBindModel.completed
        }
         const url = `${this.APIS.Todo}${this.dataBindModel.id}`
         return this.http.put(url, data)
                 .then( data => {
                     this.dataBindModel.updateResultMsg = 'Todo updated'
                     return data
                 }).catch( err => {
                     this.dataBindModel.updateResultMsg = 'Todo was NOT updated'   
                     return err
                 })  
    }

    get isDeleted() {
        const msg = this.dataBindModel.deleteResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1
    }

    get isAdded() {
        const msg = this.dataBindModel.saveResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

    get isUpdated() {
        const msg = this.dataBindModel.updateResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

}