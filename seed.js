/* eslint-disable camelcase */
'use strict';

const db = require(`./models`);

const seed = () => Promise.all([
  db.Team.create({ name: `Dev Team 1` }),
  db.Team.create({ name: `Dev Team 2` }),
  db.Team.create({ name: `Dev Team 3` }),
  db.Project.create({ name: `Test Project 1`, description: `some description 1`, team_id: 1 }),
  db.Project.create({ name: `Test Project 2`, description: `some description 2`, team_id: 1 }),
  db.Project.create({ name: `Test Project 3`, description: `some description 3`, team_id: 2 }),
  db.Task.create({ title: `Task 111`, description: `do some stuff`, project_id: 1, team_id: 1 }),
  db.Task.create({ title: `Task 222`, description: `do some stuff`, project_id: 1, team_id: 1 }),
  db.Task.create({ title: `Task 333`, description: `do some stuff`, project_id: 1, team_id: 1 })
])
  .catch(error => console.log(error));

module.exports = seed;
