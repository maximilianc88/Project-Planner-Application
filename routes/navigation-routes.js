"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`/`, (req, res) => {
    const resultObj = {};
    db.User.findAll().then(result => {
      resultObj.user = result;
      console.log(resultObj.user);
    }).then( () => {
      res.render(`logIn`, resultObj);
    });
  });
  app.get(`/dashboard`, (req, res) => {
    const allProjects = db.Project.findAll();
    const allTasks = db.Task.findAll();
    Promise
      .all([allProjects, allTasks])
      .then(modelArr => {
        const hbsObj = { projects: modelArr[0], tasks: modelArr[1] };
        res.render(`dashboard`, hbsObj);
      }).catch(err => {
        console.log(err);
      });
  });
  app.get(`/newProject`, (req, res) => res.render(`newProject`));
  app.get(`/tasks`, (req, res) => res.render(`task`));
  app.get(`/newTask`, (req, res) => res.render(`newTask`));
  app.get(`/stats`, (req, res) => res.render(`stats`));
  app.get(`/project/:id`, (req, res) => {
    const projectId = req.params.id;
    db.Project.findOne({
      where: {
        id: projectId
      },
      include: [
        {
          model: db.Team
        },
        {
          model: db.Task,
          include: {
            model: db.User
          }
        }
      ]
    }).then(hbs => {
      res.render(`project`, hbs.dataValues);
    });
  });

  app.get(`/task/:id`, (req, res) => {
    const taskId = req.params.id;
    const resultObj = {};
    db.Task.findOne({
      where: {
        id: taskId
      },
      include: [
        {
          model: db.User
        },
        {
          model: db.Status
        }
      ]
    }).then(result => {
      resultObj.task = result;
    }).then(() => {
      db.Status.findAll().then(result => {
        resultObj.status = result;
      }).then( () => {
        res.render(`task`, resultObj);
      });
    });
  });

};
