-- seeds for teams table
INSERT INTO teams
    (name, create_date, update_date)
VALUES
    ('ACES Team', '2017-01-01 01:00:00','2020-03-07 04:30:00'),
    ('Dream Team', '1999-04-01 11:45:00','1999-04-01 11:45:00');

-- seeds for user table
INSERT INTO users
    (user_name, first_name, last_name, create_date, update_date, teamIdId)
VALUES
    ('Mike', 'Michael', 'Jordan', '2017-01-01 01:00:00','2020-03-07 04:30:00', 1),
    ('Carrie', 'Carol', 'Nebraska', '1999-04-01 11:45:00','1999-04-01 11:45:00', 2);

-- seeds for projects table
INSERT INTO projects
    (name, description, due_date, create_date, update_date, teamIdId)
VALUES
    ('Virtual reality', 'Fun stuff', '2020-03-14 09:52:42','2020-03-01 01:00:00','2020-03-07 05:00:00', NULL),
    ('Chart.JS integration', 'incorporate chart.js features into project planner', '2020-03-14 06:30:00','2020-03-02 06:30:00','2020-03-07 11:27:00', 2),
    ('Front-end bugs', 'Boring stuff', '2020-04-01 10:59:42','2019-10-25 07:33:42','2019-12-05 20:33:42', 1);


-- seeds for tasks table
INSERT INTO tasks
    (title, description, create_date, update_date, assigneeIdUserId)
VALUES
    ('Design hardware', 'Create VR device', '2020-01-11 08:07:42','2020-02-22 01:00:00', 1),
    ('Design software', 'Create software to run on VR device', '2020-01-11 08:07:42','2020-03-05 18:00:00', 1),
    ('Front-end bugs', 'Triage bugs from support teams', '1999-05-01 09:45:00','2020-03-01 12:00:00', 2),
    ('Increase productivity', 'Automation', '2019-11-15 7:22:00','2019-11-15 7:22:00', null);
    
    INSERT INTO status
    (status_name)
VALUES
    ('Unassigned'),
    ('Assigned'),
    ('In Progress'),
    ('Complete'),
    ('Closed');