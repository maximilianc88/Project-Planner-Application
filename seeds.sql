-- seeds for teams table
INSERT INTO teams
    (name)
VALUES
    ('ACES Team'),
    ('Dream Team');

-- seeds for user table
INSERT INTO users
    (user_name, first_name, last_name, teamIdId)
VALUES
    ('Mike', 'Michael', 'Jordan', 1),
    ('Carrie', 'Carol', 'Nebraska', 2);

-- seeds for projects table
INSERT INTO projects
    (name, description, due_date, teamIdId)
VALUES
    ('Virtual reality', 'Fun stuff', '2020-03-14 09:52:42', NULL),
    ('Chart.JS integration', 'incorporate chart.js features into project planner', '2020-03-14 06:30:00', 2),
    ('Front-end bugs', 'Boring stuff', '2020-04-01 10:59:42', 1);


-- seeds for tasks table
INSERT INTO tasks
    (title, description, assigneeIdUserId)
VALUES
    ('Design VR hardware', 'Create device', 1),
    ('Design VR software', 'Create software', 1),
    ('Front-end bugs', 'Triage bugs from support teams', 2),
    ('Increase productivity', 'Automation', null);

-- seeds for status table
    INSERT INTO status
    (status_name)
VALUES
    ('Unassigned'),
    ('Assigned'),
    ('In Progress'),
    ('Complete'),
    ('Closed');