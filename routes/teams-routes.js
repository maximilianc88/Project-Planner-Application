"use strict";
const db = require(`../models`);

module.exports = app => {
  app.get(`/api/teams`, (req, res) => {
    db.Team.findAll({}).then(dbTeam => {
      res.json(dbTeam);
    });
  });
  app.post(`/api/teams`, (req, res) => {
    db.Team.create(req.body).then(dbTeam => {
      res.json(dbTeam);
    });
  });
  app.put(`/api/teams`, (req, res) => {
    let teamName;
    if (req.body.name) {
      teamName = req.body.name;
    }
    db.Team.update(req.body, {
      where: {
        name: teamName
      }
    }).then(dbTeam => {
      res.json(dbTeam);
    });
  });
  app.delete(`/api/teams`, (req, res) => {
    let teamName;
    if (req.body.name) {
      teamName = req.body.name;
    }
    db.Team.destroy({
      where: {
        name: teamName
      }
    }).then(dbTeam => {
      res.json(dbTeam);
    });
  });
};
