class View {

    get home() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Employees Crud</h1>
                    </div>
                </section>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>              
                <table class="table is-spaced is-bordered is-hoverable is-fullwidth is-small">
                  <thead>
                    <tr class="is-selected">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="employeesTable"></tbody>
              </table>`)
    }
    
     get add() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Add New Todo</h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">First name</label>
                        <input type="text" name="fName" class="input" required />
                    </div>
                    <div class="field">
                    <label class="label">LastName</label>
                    <input type="text" name="lName" class="input" required />
                </div>

                    <div class="field">
                        <label class="label">Department</label>
                        <select name="dep" class="select" required>
                            <option value="Software Engineeer">Software Engineeer</option>
                            <option value="Accountant">Accountant</option>
                            <option value="Officer">Officer</option>
                        </select>
                    </div>
                    <div class="field">
                    <label class="label">Job Title</label>
                    <input type="text" name="jTitle" class="input" required />
                </div>
                <div class="field">
                <label class="label">Salary</label>
                <input type="text" name="salary" class="input" required />
            </div>
                    <div class="field"> 
                        <input type="reset" value="reset" />
                        <input type="button" value="submit" class="button is-link" data-bind-event="click:saveTodo" /> 
                    </div>
                    <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
                </form>`)
    }

    get update() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Update Todo ID <span data-bind-model="id" class="has-text-warning"></span></h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">Title</label>
                        <input type="text" name="title" class="input" required />
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="completed" class="select" required>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>
                    <div class="field">
                        <input type="button" value="submit" data-bind-event="click:updateTodo" class="button is-link" />
                    </div>
                    <p data-bind-model="updateResultMsg" data-bind-safe data-bind-class="{'is-success': 'isUpdated', 'is-danger': '!isUpdated' }" class="notification is-spaced"></p>
                </form>`)
    }
    
}