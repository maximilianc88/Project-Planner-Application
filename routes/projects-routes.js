"use strict";
const db = require(`../models`);

module.exports = app => {
  // Get all projects and their associated tasks
  app.get(`/api/projects`, (req, res) => {
    db.Project.findAll({}).then(dbProject => {
      res.json(dbProject);
    });
  });
  app.get(`/api/projects/:id`, (req, res) => {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProject => {
      res.json(dbProject);
    });
  });
  app.post(`/api/projects`, (req, res) => {
    db.Project.create(req.body).then(dbProject => {
      res.json(dbProject);
    });
  });
  app.delete(`/api/projects/:id`, (req, res) => {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbProject => {
      res.json(dbProject);
    });
  });
};
