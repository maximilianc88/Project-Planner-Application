"use strict";

const db = require(`../models`);

module.exports = app => {
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

  // app.get(`/tasks/:id`, (req, res) => {
  //   const taskId = req.params.id;
  //   db.Task.findOne({
  //     where: {
  //       id: taskId
  //     }, include: [
  //       {
  //         model: db.User
  //       },
  //       {
  //         model: db.Status
  //       }
  //     ]
  //   }).then(result => {
  //     res.render(`task`, result.dataValues);
  //     console.log(result.dataValues);
  //   });
  // });
  app.get(`/tasks/:id`, (req, res) => {
    const taskId = req.params.id;
    const resultObj = {};
    db.Task.findOne({
      where: {
        id: taskId
      }, include: [
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
        console.log(resultObj.task);
        console.log(resultObj.status);
      });
    });
  });

};
