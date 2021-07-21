insert into department (name)
values
    ("Operations"),
    ("Human Resources"),
    ("Finance"),
    ("Technology"),
    ("Marketing")
;

insert into role (title, salary, department_id)
values
    ("CEO", 500000, 1),
    ("CPO", 250000, 2),
    ("CFO", 250000, 3),
    ("CTO", 250000, 4),
    ("CMO", 250000, 5),
    ("Senior Executive", 200000, 1),
    ("HR Officer", 80000, 2),
    ("Accounting Specialist", 80000, 3),
    ("Support Specialist", 80000, 4),
    ("Ad Campaign Manager", 100000, 5)
;

insert into employee (first_name, last_name, role_id, manager_id)
values 
    ("Karyn", "Workman", 1, null),
    ("Gretchen", "Skinner", 2, 1),
    ("Hop", "Thompson", 3, 1),
    ("Thor", "Bowers", 4, 1),
    ("Yetta", "Craft", 5, 1),
    ("Samson", "Golden", 6, 1),
    ("Macey", "Carter", 7, 2),
    ("Carl", "Salinas", 8, 3),
    ("Fay", "Lewis", 9, 4),
    ("Craig", "Shaffer", 10, 5),
    ("Astra", "Houston", 6, 1),
    ("Flynn", "Lawson", 7, 2),
    ("Lila", "Hyde", 8, 3),
    ("Alma", "Tillman", 8, 3),
    ("Akeem", "George", 8, 3),
    ("Sigourney", "Hampton", 9, 4),
    ("Amber", "Ortiz", 9, 4),
    ("Tyrone", "Acevedo", 9, 4),
    ("Elvis", "Munoz", 10, 5)
;