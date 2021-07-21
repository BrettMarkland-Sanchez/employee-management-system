const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const queries = require('./queries');
const art = require('ascii-art');

// creates the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'employees_DB',
});

// function for querying the database using a given query string
const query = (string) => {
    connection.query(string, function(error, results, fields) {
        if (error) throw error;
        console.log('\n');
        console.table(results);
        start();
    });
}

// function for adding new employees with Inquirer
const employee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: `What is the new employee's first name?`
        },
        {
            name: 'last_name',
            type: 'input',
            message: `What is the new employee's last name?`
        },
        {
            name: 'role_id',
            type: 'input',
            message: `What is the new employee's role id?`
        },
        {
            name: 'manager_id',
            type: 'input',
            message: `What is the new employee's manager id?`,
            default: null
        }
    ])
    .then((answers) => {
        let string = `
        insert into employee (first_name, last_name, role_id, manager_id)
        values ('${answers.first_name}', '${answers.last_name}', ${answers.role_id}, ${answers.manager_id});
        `;
        query(string);
    })
}

// function for updating employee roles with Inquirer
const employeeRole = () => {
    inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: `What is the id of the employee being updated?`
        },
        {
            name: 'role_id',
            type: 'input',
            message: `What is the new role_id for the employee?`
        }
    ])
    .then((answers) => {
        let string = `
        update employee
        set role_id = ${answers.role_id}
        where id = ${answers.employee_id}
        `;
        query(string);
    })
}

// function for updating employee manager with Inquirer
const employeeManager = () => {
    inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: `What is the id of the employee being updated?`
        },
        {
            name: 'manager_id',
            type: 'input',
            message: `What is the new manager_id for the employee?`
        }
    ])
    .then((answers) => {
        let string = `
        update employee
        set manager_id = ${answers.manager_id}
        where id = ${answers.employee_id}
        `;
        query(string);
    })
}

// function for adding new roles with Inquirer
const role = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: `What is the title for the new role?`
        },
        {
            name: 'salary',
            type: 'input',
            message: `What is the salary for the new role?`
        },
        {
            name: 'department_id',
            type: 'input',
            message: `What is the department_id for the new role?`
        }
    ])
    .then((answers) => {
        let string = `
        insert into role (title, salary, department_id)
        values ('${answers.title}', '${answers.salary}', ${answers.department_id});
        `;
        query(string);
    })
}

// function for adding new departments with Inquirer
const department = () => {
    inquirer.prompt({
            name: 'name',
            type: 'input',
            message: `What is the name for the new department?`
        })
    .then((answers) => {
        let string = `
        insert into department (name)
        values ('${answers.name}');
        `;
        query(string);
    })
}

// function which prompts the user for what action they should take
const start = () => {
    inquirer
        .prompt({
            name: 'home',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Employees by Department',
                'View All Employees by Manager',
                'Add Employee',
                //'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View All Roles',
                'Add Role',
                //'Remove Role',
                'Add Department',
                //'Remove Department'
                'Exit'
        ]})
        .then((answers) => {
            // based on their answer, perform basic CRUD operations using CLI
            switch(answers.home){
                case 'View All Employees': {
                    query(queries.a);
                } break;
                case 'View All Employees by Department': {
                    query(queries.b);
                } break;
                case 'View All Employees by Manager': {
                    query(queries.c);
                } break;
                case 'Add Employee': {
                    employee();
                } break;
                //case 'Remove Employee': {} break;
                case 'Update Employee Role': {
                    employeeRole();
                } break;
                case 'Update Employee Manager': {
                    employeeManager();
                } break;
                case 'View All Roles': {
                    query(queries.d);
                } break;
                case 'Add Role': {
                    role();
                } break;
                //case 'Remove Role': {} break;
                case 'Add Department': {
                    department();
                } break;
                //case 'Remove Department': {} break;
                case 'Exit': {
                    return;
                }
                default: start();
            }
        return;
    });
};

// creates ascii text art on startup
setTimeout(function() {
    art.font("Employee", 'doom', (error, data) => console.log(data))
}, 0);
setTimeout(function() {
    art.font("Management", 'doom', (error, data) => console.log(data))
}, 300);
setTimeout(function() {
    art.font("System", 'doom', (error, data) => console.log(data))
}, 600);

setTimeout(function(){start()}, 900);