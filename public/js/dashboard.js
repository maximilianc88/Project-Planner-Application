"use strict";
$(document).ready(() => {
  const projectsList = $(`#projects-list`);
  const tasksList = $(`#tasks-list`);

  let projects;
  let tasks;

  // const url = window.location.search;
  // let userId;
  // if (url.indexOf(`?user_id=`) !== -1) {
  //   authorId = url.split(`=`)[1];
  //   getProjects(userId);
  // }
  // If there's no userId we just get all posts as usual
  // else {
  getProjects();
  getTasks();
  // }

  function getProjects() {
    // userId = user || ``;
    // if (userId) {
    //   userId = `/?user_id=${userId}`;
    // }
    $.get(`/api/projects`, data => {
      console.log(`Projects`, data);
      projects = data;
      if (!projects || !projects.length) {
        $(`#projects-list`.append(`<p>You have no projects</p>`));
      } else {
        initializeRows();
      }
    });
  }
  function initializeRows() {
    // projectsList.empty();
    const projectsToAdd = [];
    for (let i = 0; i < projects.length; ++i) {
      projectsToAdd.push(createNewProjectsRow(projects[i]));
    }
    projectsList.append(projectsToAdd);
  }

  function createNewProjectsRow(project) {
    const newLi = $(`<li>${project.name}</li>`);
    newLi.data(`project`, project);
    return newLi;
  }

  function getTasks() {
    $.get(`/api/tasks`, data => {
      console.log(`Tasks`, data);
      tasks = data;
      if (!tasks || !tasks.length) {
        $(`#tasks-list`.append(`<p>You have no tasks</p>`));
      } else {
        initializeTasksRows();
      }
    });
  }
  function initializeTasksRows() {
    // projectsList.empty();
    const tasksToAdd = [];
    for (let i = 0; i < tasks.length; ++i) {
      tasksToAdd.push(createNewTasksRow(tasks[i]));
    }
    tasksList.append(tasksToAdd);
  }

  function createNewTasksRow(task) {
    const newTaskLi = $(`<li>${task.title}<li>`);
    newTaskLi.data(`task`, task);
    return newTaskLi;
  }
});
