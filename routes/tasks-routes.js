"use strict";
const db = require(`../models`);

module.exports = app => {
  app.get(`/api/tasks`, (req, res) => {
    const query = {};
    if (req.query.project_id) {
      query.ProjectId = req.query.project_id;
    }
    db.Task.findAll({
      where: query,
      include: [db.Project]
    }).then(dbTask => {
      res.json(dbTask);
    });
  });
  // Get specific task by id and include associated project
  app.get(`/api/tasks/:id`, (req, res) => {
    db.Task.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Project]
    }).then(dbTask => {
      res.json(dbTask);
    });
  });
  // Create a new task
  app.post(`/api/tasks`, (req, res) => {
    console.log(res.statusCode);
    db.Task.create(req.body).then(result => {
      console.log(`Affected Rows = ${result}`);
    });
  });
  // Delete a specific task
  app.delete(`/api/tasks/:id`, (req, res) => {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTask => {
      res.json(dbTask);
    });
  });

  app.put(`/api/task`, (req, res) => {
    db.Task.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(result => {
      console.log(res.statusCode);
      console.log(`Affected Rows = ${result}`);
      res.end();
    });
  });
};
