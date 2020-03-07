"use strict";
$(document).ready(() => {
  const projectsContainer = $(`#projects-container`);
  const tasksContainer = $(`#tasks-container`);
  const projectsList = $(`#projects-list`);
  const tasksList = $(`#tasks-list`);

  getProjects();
  getTasks();

  function createProjectsRow(projectData) {
    const newLi = $(`<li>`);
    newLi.data(`project`, projectData);
    newLi.append(`<li>${projectData.project}<li>`);
    return newLi;
  }

  function getProjects() {
    $.get(`/api/projects`, data => {
      for (let i = 0; i < data.length; ++i) {
        rowsToAdd.push(createProjectsRow(data[i]));
      }
      renderProjectsList(rowsToAdd);
      nameInput.val(``);
    });
  }

  function renderProjectsList(rows) {
    projectsList
      .children()
      .not(`:last`)
      .remove();
    projectsContainer.children(`.alert`).remove();
    if (rows.length) {
      console.log(rows);
      projectsList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  function createTasksRow(taskData) {
    const newLi = $(`<li>`);
    newLi.data(`task`, taskData);
    newLi.append(`<li>${taskData.task}<li>`);
    return newLi;
  }

  function getTasks() {
    $.get(`/api/tasks`, data => {
      for (let i = 0; i < data.length; ++i) {
        rowsToAdd.push(createTasksRow(data[i]));
      }
      renderTasksList(rowsToAdd);
      nameInput.val(``);
    });
  }

  function renderTasksList(rows) {
    tasksList
      .children()
      .not(`:last`)
      .remove();
    tasksContainer.children(`.alert`).remove();
    if (rows.length) {
      console.log(rows);
      tasksList.prepend(rows);
    } else {
      renderEmpty();
    }
  }
});
