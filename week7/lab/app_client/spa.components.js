class Components {

    static todoTable(data) {
        if (!Array.isArray(data)) return Promise.resolve('')
        return Promise.resolve(`${data.map(row =>
            `<tr>
                        <td>${row.id}</td>
                        <td>${row.title}</td>
                        <td>${row.completed}</td>
                        <td><button data-id="${row.id}" data-bind-event="click:deleteTodo" class="button is-danger is-outlined">Delete</button></td>
                        <td><button data-id="${row.id}" data-bind-event="click:goToUpdatePage" class="button is-link is-outlined">Update</button></td>
                    </tr>`
        ).join('')}`)
    }

    static employeesTable(data) {
        console.log("Called");
        console.log(data);
        if (!Array.isArray(data)) return Promise.resolve('')
        return Promise.resolve(`${data.map(row =>
                    `<tr>
                        <td>${row._id}</td>
                        <td>${row.firstName}</td>
                        <td>${row.lastName}</td>
                        <td>${row.department}</td>
                        <td>${row.jobTitle}</td>
                        <td>${row.salary}</td>
                        <td><button data-id="${row.id}" data-bind-event="" class="button is-danger is-outlined">Delete</button></td>
                        <td><button data-id="${row.id}" data-bind-event="" class="button is-link is-outlined">Update</button></td>
                    </tr>`
        ).join('')}`)
    }

}