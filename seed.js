/* eslint-disable camelcase */
"use strict";

const db = require(`./models`);

const seed = () =>
  Promise.all([
    // db.Status.create({ status_code: 0, status_name: `Unassigned` }),
    db.Status.create({ status_code: 1, status_name: `Open` }),
    db.Status.create({ status_code: 2, status_name: `In-Progress` }),
    db.Status.create({ status_code: 3, status_name: `Completed` }),
    db.Status.create({ status_code: 4, status_name: `Closed` }),
    db.Team.create({ name: `Product Team` }),
    db.Team.create({ name: `Design Team` }),
    db.Team.create({ name: `Engineering Team` }),
    db.Team.create({ name: `Art Team` }),
    db.Team.create({ name: `QA Team` }),
    db.User.create({
      user_name: `phaggio`,
      first_name: `Richard`,
      last_name: `Wang`,
      team_id: 1,
      password: `jello`
    }),
    db.User.create({
      user_name: `kaitlync`,
      first_name: `Kaitlyn`,
      last_name: `Carlson`,
      team_id: 1,
      password: `pudding`
    }),
    db.User.create({
      user_name: `rachelr`,
      first_name: `Rachel`,
      last_name: `Rohrbach`,
      team_id: 1,
      password: `koolaid`
    }),
    db.User.create({
      user_name: `maximillianc`,
      first_name: `Maximillian`,
      last_name: `Cartwright`,
      team_id: 1,
      password: `yoohoo`
    }),
    db.User.create({
      user_name: `leo`,
      first_name: `Leonardo`,
      last_name: `Dicaprio`,
      team_id: 2,
      password: `fanta`
    }),
    db.User.create({
      user_name: `cbale`,
      first_name: `Christian`,
      last_name: `Bale`,
      team_id: 2,
      password: `coke`
    }),
    db.User.create({
      user_name: `sjob`,
      first_name: `Steve`,
      last_name: `Jobs`,
      team_id: 1,
      password: `pepsi`
    }),
    db.User.create({
      user_name: `jeffbezos`,
      first_name: `Jeff`,
      last_name: `Bezos`,
      team_id: 3,
      password: `fresca`
    }),
    db.User.create({
      user_name: `billgates`,
      first_name: `Bill`,
      last_name: `Gates`,
      team_id: 3,
      password: `sublime`
    }),
    db.User.create({
      user_name: `elonmusk`,
      first_name: `Elon`,
      last_name: `Musk`,
      team_id: 3,
      password: `tobe`
    }),
    db.User.create({
      user_name: `timapple`,
      first_name: `Tim`,
      last_name: `Cook`,
      password: `aitch`
    }),
    db.User.create({
      user_name: `michaelj`,
      first_name: `Michael`,
      last_name: `Jordan`,
      team_id: 2,
      password: `weekend`
    }),
    db.User.create({
      user_name: `warrenb`,
      first_name: `Warren`,
      last_name: `Buffett`,
      team_id: 4,
      password: `allamericanrejects`
    }),
    db.User.create({
      user_name: `georgew`,
      first_name: `George`,
      last_name: `Washington`,
      password: `hendrix`
    }),
    db.User.create({
      user_name: `johns`,
      first_name: `John`,
      last_name: `Smith`,
      team_id: 4,
      password: `holler`
    }),
    db.User.create({
      user_name: `markz`,
      first_name: `Mark`,
      last_name: `Zuckerberg`,
      team_id: 5,
      password: `atcha`
    }),
    db.User.create({
      user_name: `paulz`,
      first_name: `Paul`,
      last_name: `Zhao`,
      team_id: 5,
      password: `boy`
    }),
    db.Project.create({
      name: `Awesome Product`,
      description: `Spec out a product that is awesome`,
      due_date: `2020-04-15`,
      team_id: 1
    }),
    db.Project.create({
      name: `Boring Product`,
      description: `Spec out a boring product that will have zero traction`,
      team_id: 1
    }),
    db.Project.create({
      name: `Design Fun Feature`,
      description: `Design soemthing that is fun for the boring product`,
      team_id: 2
    }),
    db.Project.create({
      name: `Test the boring product`,
      description: `stress test the boring product extensively`,
      team_id: 5
    }),
    db.Project.create({
      name: `Secret Project`,
      description: `this is a secret project, it is not assigned to any team yet`,
      due_date: `2020-05-30`
    }),
    db.Project.create({
      name: `Create stupid art`,
      description: `create some stupid art that no one appreciate`,
      due_date: `2020-05-30`,
      team_id: 4
    }),
    db.Project.create({
      name: `Awesome Project`,
      description: `awesomeness`,
      due_date: `2020-06-30`,
      team_id: 4
    }),
    db.Task.create({
      title: `Product Spec`,
      description: `Start writing product spec`,
      project_id: 1,
      team_id: 1,
      assignee_id: 1,
      status_code: 2
    }),
    db.Task.create({
      title: `Set up MVP`,
      description: `define MVP requirement`,
      project_id: 1,
      team_id: 1,
      assignee_id: 2
    }),
    db.Task.create({
      title: `Identify Dependencies`,
      description: `identify technical dependencies for this product`,
      project_id: 1,
      team_id: 1,
      assignee_id: 3,
      status_code: 2
    }),
    db.Task.create({
      title: `Define V1 requirement`,
      description: `define V1 requirement for the product`,
      project_id: 1,
      team_id: 1,
      assignee_id: 1,
      status_code: 1
    }),
    db.Task.create({
      title: `Success Metrics`,
      description: `outline success metrics`,
      project_id: 1,
      team_id: 1,
      assignee_id: 3,
      status_code: 1
    }),
    db.Task.create({
      title: `Monitoring Metrics`,
      description: `outline monitoring metrics`,
      project_id: 1,
      team_id: 1,
      assignee_id: 2,
      status_code: 1
    }),
    db.Task.create({
      title: `User Requirement`,
      description: `collect user requirement`,
      project_id: 1,
      team_id: 1,
      assignee_id: 2,
      status_code: 3
    }),
    db.Task.create({
      title: `V2 Requirement`,
      description: `design some stuff`,
      project_id: 1,
      team_id: 1
    }),
    db.Task.create({
      title: `Sit around`,
      description: `do something boring`,
      project_id: 2,
      team_id: 1,
      status_code: 1
    }),
    db.Task.create({
      title: `Sleep`,
      description: `waste time`,
      project_id: 2,
      team_id: 1,
      status_code: 4
    }),
    db.Task.create({
      title: `Eat things`,
      description: `get fat`,
      project_id: 2,
      team_id: 1,
      assignee_id: 2
    }),
    db.Task.create({
      title: `Watch TV`,
      description: `learn something useless`,
      project_id: 2,
      team_id: 1,
      assignee_id: 1
    }),
    db.Task.create({
      title: `Design a game`,
      description: `design a game for boring product`,
      project_id: 3,
      team_id: 2,
      assignee_id: 4,
      status_code: 3
    }),
    db.Task.create({
      title: `Design anything`,
      description: `do some stuff`,
      project_id: 3,
      team_id: 2
    }),
    db.Task.create({
      title: `Design something bad`,
      description: `do some stuff`,
      project_id: 3,
      team_id: 2,
      assignee_id: 6,
      status_code: 1
    }),
    db.Task.create({
      title: `Test stuff`,
      description: `do stuff stuff stuff stuff stuff`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test thing`,
      description: `test some thing`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test UI`,
      description: `test some stuff and things`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test functions`,
      description: `testing`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test api`,
      description: `testing testing`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test controller`,
      description: `test some other stuff`,
      project_id: 4
    }),
    db.Task.create({
      title: `Secret 000`,
      description: `do something useful`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 102`,
      description: `do something useful`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 103`,
      description: `do something useful`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 104`,
      description: `do something useful`,
      project_id: 5
    }),
    db.Task.create({
      title: `STUFF`,
      description: `do some more stuff`,
      project_id: 5
    }),
    db.Task.create({
      title: `Analytics Requirement`,
      description: `define analytics req.`,
      project_id: 1
    }),
    db.Task.create({
      title: `Get it approved`,
      description: `submit for approval`,
      project_id: 1
    }),
    db.Task.create({
      title: `Drink water`,
      description: `stay hydrate`,
      project_id: 2,
      assignee_id: 1
    }),
    db.Task.create({
      title: `Read a book`,
      description: `Read a boring book`,
      project_id: 2,
      assignee_id: 3
    }),
    db.Task.create({
      title: `Do Nothing`,
      description: `BOREDOM`,
      project_id: 2,
      assignee_id: 2
    })
  ]).catch(error => console.log(error));

module.exports = seed;
