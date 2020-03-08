/* eslint-disable camelcase */
'use strict';

const db = require(`./models`);

const seed = () => Promise.all([
  db.Status.create({ status_code: 0, status_name: `Unassigned` }),
  db.Status.create({ status_code: 1, status_name: `Open` }),
  db.Status.create({ status_code: 2, status_name: `In-Progress` }),
  db.Status.create({ status_code: 3, status_name: `Completed` }),
  db.Status.create({ status_code: 4, status_name: `Closed` }),
  db.Team.create({ name: `Design Team 1` }),
  db.Team.create({ name: `Dev Team 2` }),
  db.Team.create({ name: `QA Team 3` }),
  db.Team.create({ name: `Art Team 4`}),
  db.User.create({ user_name: `phaggio`, first_name: `Richard`, last_name: `Wang`, team_id: 1 }),
  db.User.create({ user_name: `kaitlync`, first_name: `Kaitlyn`, last_name: `Carlson`, team_id: 1 }),
  db.User.create({ user_name: `rachelr`, first_name: `Rachel`, last_name: `Rohrbach`, team_id: 1 }),
  db.User.create({ user_name: `bradpitt`, first_name: `Brad`, last_name: `Pit`, team_id: 2 }),
  db.User.create({ user_name: `leo`, first_name: `Leo`, last_name: `Dicaprio`, team_id: 2 }),
  db.User.create({ user_name: `cbale`, first_name: `Christian`, last_name: `Bale`, team_id: 2 }),
  db.User.create({ user_name: `sjob`, first_name: `Steve`, last_name: `Jobs`, team_id: 3 }),
  db.User.create({ user_name: `jeffbezos`, first_name: `Jeff`, last_name: `Bezos`, team_id: 3 }),
  db.User.create({ user_name: `billgates`, first_name: `Bill`, last_name: `Gates`, team_id: 3 }),
  db.User.create({ user_name: `elonmusk`, first_name: `Elon`, last_name: `Musk` }),
  db.User.create({ user_name: `timapple`, first_name: `Tim`, last_name: `Cook` }),
  db.User.create({ user_name: `michaelj`, first_name: `Michael`, last_name: `Jordan`, team_id: 1 }),
  db.User.create({ user_name: `warrenb`, first_name: `Warren`, last_name: `Buffett`, team_id: 4 }),
  db.Project.create(
    {
      name: `Design Project 1`,
      description: `some description 1`,
      due_date: `2020-04-01`,
      team_id: 1
    }
  ),
  db.Project.create(
    { name: `Boring Project 2`, description: `some boring stuff`, team_id: 1 }
  ),
  db.Project.create(
    { name: `Fun Project 3`, description: `some description 3`, team_id: 2 }
  ),
  db.Project.create(
    { name: `Test Project 4`, description: `some description 4` }
  ),
  db.Project.create(
    { name: `Secret Project 5`, description: `some description 5`, due_date: `2020-05-30` }
  ),
  db.Project.create(
    { name: `Stupid Project 6`, description: `doing a lot of nothing`, due_date: `2020-05-30` }
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
  db.Task.create({ title: `Task 666`, description: `do some thing`, project_id: 4 }),
  db.Task.create({ title: `Task 101`, description: `do some stuff`, project_id: 4 }),
  db.Task.create({ title: `Task 102`, description: `do something useful`, project_id: 5 }),
  db.Task.create({ title: `Task 103`, description: `do some more stuff`, project_id: 5 })
])
  .catch(error => console.log(error));

module.exports = seed;
