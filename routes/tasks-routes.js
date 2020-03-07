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
  app.post(`/api/tasks`, (req, res) => {
    db.Task.create(req.body).then(dbTask => {
      res.json(dbTask);
    });
  });
  app.delete(`/api/tasks`, (req, res) => {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTask => {
      res.json(dbTask);
    });
  });
  app.put(`/api/tasks`, (req, res) => {
    db.Task.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbTask => {
      res.json(dbTask);
    });
  });
};
