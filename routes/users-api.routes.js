"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`api/users`, (req, res) => {
    db.User.findAll({}).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.get(`/api/users/:id`, (req, res) => {
    let userName;
    if (req.body.user_name) {
      userName = req.body.user_name;
    }
    db.User.findOne({
      where: {
        // eslint-disable-next-line camelcase
        user_name: userName
      },
      include: [db.Task, db.Project, db.Team]
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
