const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const queries = require('./queries');

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
    });
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
                //'Add Department',
                //'Remove Department'],
        })
        .then((answer) => {
        // based on their answer, perform basic CRUD operations using CLI
        switch(answer.home){
            case 'View All Employees': {
                query(queries.a);
                start();
            } break;
            case 'View All Employees by Department': {
                query(queries.b);
                start();
            } break;
            case 'View All Employees by Manager': {
                query(queries.c);
                start();
            } break;
            case 'Add Employee': {} break;
            //case 'Remove Employee': {} break;
            case 'Update Employee Role': {} break;
            case 'Update Employee Manager': {} break;
            case 'View All Roles': {} break;
            case 'Add Role': {} break;
            //case 'Remove Role': {} break;
            //case 'Add Department': {} break;
            //case 'Remove Department': {} break;
        }
    });
};

start();