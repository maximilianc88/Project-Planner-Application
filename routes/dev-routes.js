"use strict";

const path = require(`path`);
const db = require(`../models`);

module.exports = app => {
  app.get(`/node_modules/bulma/css/bulma.css`, (req, res) =>
    res.sendFile(path.join(__dirname, `bulma/css/bulma.css`))
  );

  app.get(`/`, (req, res) => res.render(`home`));
  app.get(`/dashboard`, (req, res) => res.render(`dashboard`));
  app.get(`/newProject`, (req, res) => res.render(`newProject`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
  app.get(`/newTask`, (req, res) => res.render(`newTask`));
  app.get(`/stats`, (req, res) => res.render(`stats`));
  app.get(`/project/:id`, (req, res) => {
    const projectId = req.params.id;
    db.Project.findOne({
      where: {
        id: projectId
      }
    })
      .then(hbs => {
        console.log(hbs.dataValues);
        res.render(`project`, hbs.dataValues );
      });
  });
};
