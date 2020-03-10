"use strict";

const path = require(`path`);

module.exports = app => {
  app.get(`/node_modules/bulma/css/bulma.css`, (req, res) =>
    res.sendFile(path.join(__dirname, `../node_modules/bulma/css/bulma.css`))
  );

  app.get(`/`, (req, res) => res.render(`home`));
  app.get(`/dashboard`, (req, res) => res.render(`dashboard`));
  app.get(`/dev`, (req, res) => res.render(`dev`));
  app.get(`/projects`, (req, res) => res.render(`project`));
  app.get(`/newProject`, (req, res) => res.render(`newProject`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
  app.get(`/newTask`, (req, res) => res.render(`newTask`));
  app.get(`/stats`, (req, res) => res.render(`stats`));
};
