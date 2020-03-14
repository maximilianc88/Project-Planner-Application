/* eslint-disable camelcase */
"use strict";

const db = require(`./models`);

const seed = () =>
  Promise.all([
    db.Status.create({ status_code: 1, status_name: `Open` }),
    db.Status.create({ status_code: 2, status_name: `In-Progress` }),
    db.Status.create({ status_code: 3, status_name: `Completed` }),
    db.Status.create({ status_code: 4, status_name: `Closed` }),
    db.Team.create({ name: `Product Team` }), // team 1
    db.Team.create({ name: `Design Team` }), // team 2
    db.Team.create({ name: `Engineering Team` }), // team 3
    db.Team.create({ name: `Art Team` }), // team 4
    db.Team.create({ name: `QA Team` }), // team 5
    db.User.create({
      user_name: `phaggio`,
      first_name: `Richard`,
      last_name: `Wang`,
      team_id: 1, // Product
      password: `jello`
    }),
    db.User.create({
      user_name: `kaitlync`,
      first_name: `Kaitlyn`,
      last_name: `Carlson`,
      team_id: 1, // Product
      password: `pudding`
    }),
    db.User.create({
      user_name: `rachelr`,
      first_name: `Rachel`,
      last_name: `Rohrbach`,
      team_id: 1, // Product
      password: `koolaid`
    }),
    db.User.create({
      user_name: `maximillianc`,
      first_name: `Maximillian`,
      last_name: `Cartwright`,
      team_id: 1, // Product
      password: `yoohoo`
    }),
    db.User.create({
      user_name: `dicapriol`,
      first_name: `Leonardo`,
      last_name: `Dicaprio`,
      team_id: 2, // Design
      password: `fanta`
    }),
    db.User.create({
      user_name: `balec`,
      first_name: `Christian`,
      last_name: `Bale`,
      team_id: 2, // Design
      password: `coke`
    }),
    db.User.create({
      user_name: `jobss`,
      first_name: `Steve`,
      last_name: `Jobs`,
      team_id: 1, // Product
      password: `pepsi`
    }),
    db.User.create({
      user_name: `bezosj`,
      first_name: `Jeff`,
      last_name: `Bezos`,
      team_id: 3, // Engineering
      password: `fresca`
    }),
    db.User.create({
      user_name: `gatesb`,
      first_name: `Bill`,
      last_name: `Gates`,
      team_id: 3, // Engineering
      password: `sublime`
    }),
    db.User.create({
      user_name: `muske`,
      first_name: `Elon`,
      last_name: `Musk`,
      team_id: 3, // Engineering
      password: `tobe`
    }),
    db.User.create({
      user_name: `timapple`,
      first_name: `Tim`,
      last_name: `Cook`,
      team_id: 4, // Art
      password: `aitch`
    }),
    db.User.create({
      user_name: `jordanm`,
      first_name: `Michael`,
      last_name: `Jordan`,
      team_id: 2, // Design
      password: `weekend`
    }),
    db.User.create({
      user_name: `warrenb`,
      first_name: `Warren`,
      last_name: `Buffett`,
      team_id: 4, // Art
      password: `allamericanrejects`
    }),
    db.User.create({
      user_name: `washingtong`,
      first_name: `George`,
      last_name: `Washington`,
      password: `hendrix`
    }),
    db.User.create({
      user_name: `johns`,
      first_name: `John`,
      last_name: `Smith`,
      team_id: 4, // Art
      password: `holler`
    }),
    db.User.create({
      user_name: `zuckerbergm`,
      first_name: `Mark`,
      last_name: `Zuckerberg`,
      team_id: 5, // QA
      password: `atcha`
    }),
    db.User.create({
      user_name: `zhaoz`,
      first_name: `Paul`,
      last_name: `Zhao`,
      team_id: 5, // QA
      password: `boy`
    }),
    db.Project.create({
      name: `Awesome Product`,
      description: `Spec out a product that is awesome!!!`,
      due_date: `2020-04-15`,
      team_id: 1
    }),
    db.Project.create({
      name: `Boring Product`,
      description: `Spec out a boring product that will have zero traction`,
      team_id: 1 // Product
    }),
    db.Project.create({
      name: `Design Fun Feature`,
      description: `Design soemthing that is fun for the boring product`,
      team_id: 2 // Design
    }),
    db.Project.create({
      name: `Test the boring product`,
      description: `stress test the boring product extensively`,
      team_id: 5 // QA
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
      team_id: 4 // Art
    }),
    db.Project.create({
      name: `Create wonderful art assets`,
      description: `Create re-usable art assets for the awesome product`,
      due_date: `2020-06-30`,
      team_id: 4 // Art
    }),
    db.Task.create({
      title: `Product Spec`,
      description: `Start writing product spec`,
      project_id: 1,
      team_id: 1, // Product
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
      title: `Design the game configuration`,
      description: `design basic game configuration for boring product`,
      project_id: 3,
      team_id: 2,
      assignee_id: 4,
      status_code: 3
    }),
    db.Task.create({
      title: `Design the user setting`,
      description: `design user setting page flow`,
      project_id: 3,
      team_id: 2
    }),
    db.Task.create({
      title: `Design new task workflow`,
      description: `design user interface flow for the new task page`,
      project_id: 3,
      team_id: 2,
      assignee_id: 6,
      status_code: 1
    }),
    db.Task.create({
      title: `Test Homepage`,
      description: `test the homepage UI`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test dashboard`,
      description: `test dashboard data display and UI`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test New Project Page`,
      description: `test add new project page ui, assign team, submit, and cancel button`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test existing project page`,
      description: `test existing project page, edit description, submit, cancel, etc.`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test API`,
      description: `test all navigation route api calls`,
      project_id: 4
    }),
    db.Task.create({
      title: `Test stats page`,
      description: `test the stats page UI and data validation`,
      project_id: 4
    }),
    db.Task.create({
      title: `Secret 1`,
      description: `classified`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 2`,
      description: `you're not authorized to view this`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 3`,
      description: `there's nothing here`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 4`,
      description: `blank`,
      project_id: 5
    }),
    db.Task.create({
      title: `Secret 5`,
      description: `unknown`,
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
      title: `Another boring product task`,
      description: `stay away from COVIG19`,
      project_id: 2,
      assignee_id: 1,
      status_code: 2
    }),
    db.Task.create({
      title: `Get budget for the project`,
      description: `rub shoulders`,
      project_id: 2,
      assignee_id: 7,
      status_code: 2
    }),
    db.Task.create({
      title: `Develop GTM plan`,
      description: `work with stakeholders to define what go-to-market plan is`,
      project_id: 2,
      assignee_id: 7,
      status_code: 3
    })
  ]).catch(error => console.log(error));

module.exports = seed;
