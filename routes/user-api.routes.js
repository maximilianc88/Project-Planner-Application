"use strict";

const db = require(`../models`);

module.exports = app => {
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
};
