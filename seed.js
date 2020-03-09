/* eslint-disable camelcase */
'use strict';

const db = require(`./models`);

const seed = () => Promise.all([
  db.Status.create({ status_code: 0, status_name: `Unassigned` }),
  db.Status.create({ status_code: 1, status_name: `Open` }),
  db.Status.create({ status_code: 2, status_name: `In-Progress` }),
  db.Status.create({ status_code: 3, status_name: `Completed` }),
  db.Status.create({ status_code: 4, status_name: `Closed` }),
  db.Team.create({ name: `Design Team` }),
  db.Team.create({ name: `Dev Team` }),
  db.Team.create({ name: `QA Team` }),
  db.Team.create({ name: `Art Team` }),
  db.Team.create({ name: `Product Team` }),
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
  db.User.create({ user_name: `georgew`, first_name: `George`, last_name: `Washington` }),
  db.User.create({ user_name: `johns`, first_name: `John`, last_name: `Smith`, team_id: 4 }),
  db.User.create({ user_name: `markz`, first_name: `Mark`, last_name: `Zuckerberg`, team_id: 5 }),
  db.User.create({ user_name: `paulz`, first_name: `Paul`, last_name: `Zhao`, team_id: 5 }),
  db.Project.create(
    {
      name: `Design Project`,
      description: `Design stuff`,
      due_date: `2020-04-01`,
      team_id: 1
    }
  ),
  db.Project.create(
    { name: `Boring Project`, description: `some boring stuff`, team_id: 1 }
  ),
  db.Project.create(
    { name: `Fun Project`, description: `some description 3`, team_id: 2 }
  ),
  db.Project.create(
    { name: `Test Project`, description: `some description 4`, team_id: 5 }
  ),
  db.Project.create(
    { name: `Secret Project`, description: `some description 5`, due_date: `2020-05-30` }
  ),
  db.Project.create(
    { name: `Stupid Project 6`, description: `doing a lot of nothing`, due_date: `2020-05-30` }
  ),
  db.Project.create(
    { name: `Awesome Project`, description: `awesomeness`, due_date: `2020-06-30`, team_id: 4 }
  ),
  db.Task.create(
    {
      title: `Design 111`,
      description: `some description`,
      project_id: 1,
      team_id: 1,
      assignee_id: 1,
      status_code: 2
    }
  ),
  db.Task.create(
    { title: `Design 222`, description: `design something`, project_id: 1, team_id: 1, assignee_id: 1 }
  ),
  db.Task.create(
    { title: `Design ABC`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 2 }
  ),
  db.Task.create(
    { title: `Design DEF`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 1 }
  ),
  db.Task.create(
    { title: `Design XYZ`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 1 }
  ),
  db.Task.create(
    { title: `Design 123`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 1 }
  ),
  db.Task.create(
    { title: `Design 456`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 3 }
  ),
  db.Task.create(
    { title: `Design New`, description: `design some stuff`, project_id: 1, team_id: 1, assignee_id: 2, status_code: 3 }
  ),
  db.Task.create(
    { title: `Design 999`, description: `do some design`, project_id: 2, team_id: 1, status_code: 1 }
  ),
  db.Task.create(
    { title: `Design 1111`, description: `do some more design`, project_id: 2, team_id: 1, status_code: 4 }
  ),
  db.Task.create(
    { title: `Design 2222`, description: `do even more design`, project_id: 2, team_id: 1 }
  ),
  db.Task.create(
    { title: `Design 3333`, description: `do some stuff`, project_id: 2, team_id: 1 }),
  db.Task.create(
    { title: `Task 301`, description: `do some stuff`, project_id: 3, team_id: 2, assignee_id: 4, status_code: 3 }
  ),
  db.Task.create(
    { title: `Task 302`, description: `do some stuff`, project_id: 3, team_id: 2 }
  ),
  db.Task.create(
    { title: `Task 303`, description: `do some stuff`, project_id: 3, team_id: 2, status_code: 1 }
  ),
  db.Task.create({ title: `Test 101`, description: `do stuff stuff stuff stuff stuff`, project_id: 4 }),
  db.Task.create({ title: `Test 102`, description: `test some thing`, project_id: 4 }),
  db.Task.create({ title: `Test 103`, description: `test some stuff and things`, project_id: 4 }),
  db.Task.create({ title: `Task 102`, description: `do something useful`, project_id: 5 }),
  db.Task.create({ title: `Task 103`, description: `do some more stuff`, project_id: 5 })
])
  .catch(error => console.log(error));

module.exports = seed;
