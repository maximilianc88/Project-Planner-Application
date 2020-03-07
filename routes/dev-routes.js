'use strict';

module.exports = app => {
  app.get(`/`, (req, res) => res.render(`dashboard`));
  app.get(`/dev`, (req, res) => res.render(`dev`));
  app.get(`/projects`, (req, res) => res.render(`project`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
};
