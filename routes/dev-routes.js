'use strict';

const db = require(`../models`);

module.exports = app => {
  app.get(`/`, (req, res) => {
    db.Project.findAll().then(result => {
      res.render(`dev`, result);
    });
  });
};
