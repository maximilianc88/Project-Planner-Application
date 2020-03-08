"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/users`, (req, res) => {
    db.User.findAll({}).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.get(`/api/users/:id`, (req, res) => {
    db.User.findOne({
      where: {
        // eslint-disable-next-line camelcase
        user_id: req.params.id
      },
      include: [{ model: db.Team }, { model: db.Task }]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.post(`/api/users`, (req, res) => {
    db.User.create(req.body).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.put(`/api/users`, (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.delete(`/api/users`, (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
};
