"use strict";

const db = require(`../models`);

module.exports = app => {
  // Retrieve available status choices
  app.get(`/api/status`, (req, res) => {
    db.Status.findAll({}).then(dbStatus => {
      res.json(dbStatus);
    });
  });
};
