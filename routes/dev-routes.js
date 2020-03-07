'use strict';

const path = require(`path`);

module.exports = app => {
  app.get(`/node_modules/bulma/css/bulma.css`, (req, res) =>
    res.sendFile(path.join(__dirname, `../node_modules/bulma/css/bulma.css`))
  );
  app.get(`/public/js/main.js`, (req, res) =>
    res.sendFile(path.join(__dirname, `../public/js/main.js`))
  );
  app.get(`/`, (req, res) => res.render(`dashboard`));
  app.get(`/dev`, (req, res) => res.render(`dev`));
  app.get(`/projects`, (req, res) => res.render(`project`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
};
