'use strict';

const path = require(`path`);

module.exports = app => {
  app.get(`/node_modules/bulma/css/bulma.css`, (req, res) =>
    res.sendFile(path.join(__dirname, `../node_modules/bulma/css/bulma.css`))
  );
  app.get(`/public/js/main.js`, (req, res) =>
    res.sendFile(path.join(__dirname, `../public/js/main.js`))
  );
  app.get(`/public/js/dashboard.js`, (req, res) => {
    const url = path.join(__dirname, `../public/js/dashboard.js`);
    console.log(url);
    res.sendFile(path.join(__dirname, `../public/js/dashboard.js`));
  });
  app.get(`/public/js/login.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/login.js`));
  });
  app.get(`/public/js/signUp.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/signUp.js`));
  });
  app.get(`/public/js/newProject.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/newProject.js`));
  });
  app.get(`/public/js/newTask.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/newTask.js`));
  });
  app.get(`/public/js/viewProject.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/viewProject.js`));
  });
  app.get(`/public/js/viewTask.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/js/viewTask.js`));
    app.get(`/public/js/stats.js`, (req, res) => {
      res.sendFile(path.join(__dirname, `../public/js/stats.js`));
  });
  app.get(`/`, (req, res) => res.render(`dashboard`));
  app.get(`/dev`, (req, res) => res.render(`dev`));
  app.get(`/projects`, (req, res) => res.render(`project`));
  app.get(`/newProject`, (req, res) => res.render(`newProject`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
  app.get(`/newTask`, (req, res) => res.render(`newTask`));
  app.get(`/stats`, (req, res) => res.render(`stats`));

};
