// view all employees
const a = `
select first_name, last_name, title, salary, name as 'department'
from employee
join role
on employee.role_id = role.id
join department
on role.department_id = department.id;
`;

// view all employees by department
const b = `
select first_name, last_name, title, salary, name as 'department'
from employee
join role
on employee.role_id = role.id
join department
on role.department_id = department.id
order by name;
`;

// view all employees by manager
const c = `
select employee.first_name, employee.last_name, title, salary, name as 'department', concat(manager.first_name, ' ', manager.last_name) as manager
from employee
right join role
on employee.role_id = role.id
right join department
on role.department_id = department.id
inner join employee as manager
on manager.id = employee.manager_id
order by manager;
`;

// view all roles
const d = `
select role.id as role_id, title, salary, name as department from role
join department
on department.id = role.department_id
order by role.id;
`

exports.a = a;
exports.b = b;
exports.c = c;
exports.d = d;