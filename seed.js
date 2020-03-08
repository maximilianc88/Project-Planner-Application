/* eslint-disable camelcase */
'use strict';

const db = require(`./models`);

const seed = () => Promise.all([
  db.Status.create({ status_code: 0, status_name: `unassigned` }),
  db.Status.create({ status_code: 1, status_name: `open` }),
  db.Status.create({ status_code: 2, status_name: `in-progress` }),
  db.Status.create({ status_code: 3, status_name: `completed` }),
  db.Status.create({ status_code: 4, status_name: `closed` }),
  db.Team.create({ name: `Dev Team 1` }),
  db.Team.create({ name: `Dev Team 2` }),
  db.Team.create({ name: `Dev Team 3` }),
  db.User.create({ user_name: `phaggio`, first_name: `Richard`, last_name: `Wang`, team_id: 1 }),
  db.User.create({ user_name: `kaitlyn123`, first_name: `Kaitlyn`, last_name: `Something`, team_id: 1 }),
  db.User.create({ user_name: `rachel123`, first_name: `Rachel`, last_name: `Something`, team_id: 1 }),
  db.User.create({ user_name: `bradpitt`, first_name: `Brad`, last_name: `Pit`, team_id: 2 }),
  db.User.create({ user_name: `leo`, first_name: `Leo`, last_name: `Dicaprio`, team_id: 2 }),
  db.User.create({ user_name: `cbale`, first_name: `Christian`, last_name: `Bale`, team_id: 2 }),
  db.User.create({ user_name: `sjob`, first_name: `Steve`, last_name: `Jobs`, team_id: 3 }),
  db.User.create({ user_name: `jeffbezos`, first_name: `Jeff`, last_name: `Bezos`, team_id: 3 }),
  db.User.create({ user_name: `billgates`, first_name: `Bill`, last_name: `Gates`, team_id: 3 }),
  db.User.create({ user_name: `elonmusk`, first_name: `Elon`, last_name: `Musk` }),
  db.User.create({ user_name: `timapple`, first_name: `Tim`, last_name: `Cook` }),
  db.Project.create(
    { name: `Test Project 1`, description: `some description 1`, due_date: `2020-04-01`, team_id: 1 }
  ),
  db.Project.create(
    { name: `Test Project 2`, description: `some description 2`, team_id: 1 }
  ),
  db.Project.create(
    { name: `Test Project 3`, description: `some description 3`, team_id: 2 }
  ),
  db.Project.create(
    { name: `Test Project 4`, description: `some description 4` }
  ),
  db.Project.create(
    { name: `Secret Project 5`, description: `some description 5`, due_date: `2020-05-30` }
  ),
  db.Task.create(
    { title: `Task 111`,
      description: `some description`,
      project_id: 1,
      team_id: 1,
      assignee_id: 1,
      status_code: 2
    }
  ),
  db.Task.create({ title: `Task 222`, description: `do some stuff`, project_id: 1, team_id: 1, assignee_id: 1 }),
  db.Task.create({ title: `Task 333`, description: `do some stuff`, project_id: 1, team_id: 1, assignee_id: 2 }),
  db.Task.create({ title: `Task 444`, description: `do some stuff`, project_id: 2, team_id: 1 }),
  db.Task.create(
    { title: `Task 301`, description: `do some stuff`, project_id: 3, team_id: 2, assignee_id: 4, status_code: 3 }
  ),
  db.Task.create(
    { title: `Task 302`, description: `do some stuff`, project_id: 3, team_id: 2 }
  ),
  db.Task.create(
    { title: `Task 303`, description: `do some stuff`, project_id: 3, team_id: 2, status_code: 1 }
  ),
  db.Task.create({ title: `Task 555`, description: `do stuff stuff stuff stuff stuff`, project_id: 4 }),
  db.Task.create({ title: `Task 666`, description: `do some stuff`, project_id: 4 }),
  db.Task.create({ title: `Task 101`, description: `do some stuff`, project_id: 4 }),
  db.Task.create({ title: `Task 102`, description: `do some stuff`, project_id: 5 }),
  db.Task.create({ title: `Task 103`, description: `do some stuff`, project_id: 5 })
])
  .catch(error => console.log(error));

module.exports = seed;
