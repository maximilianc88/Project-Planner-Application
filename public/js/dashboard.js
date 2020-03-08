"use strict";
$(document).ready(() => {
  const projectsContainer = $(`#projects-container`);
  // const tasksContainer = $(`#tasks-container`);
  const projectsList = $(`#projects-list`);
  // const tasksList = $(`#tasks-list`);

  let projects;
  // let tasks;

  const url = window.location.search;
  let userId;
  if (url.indexOf(`?user_id=`) !== -1) {
    authorId = url.split(`=`)[1];
    getPosts(userId);
  }
  // If there's no userId we just get all posts as usual
  else {
    getProjects();
  }

  function getProjects(user) {
    userId = user || ``;
    if (userId) {
      userId = `/?user_id=${userId}`;
    }
    $.get(`/api/projects/${userId}`, data => {
      console.log(`Projects`, data);
      projects = data;
      if (!projects || !projects.length) {
        displayEmpty(user);
      } else {
        initializeRows();
      }
    });
  }
  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    projectsContainer.empty();
    const projectsToAdd = [];
    for (let i = 0; i < projects.length; ++i) {
      projectsToAdd.push(createNewProjectRow(projects[i]));
    }
    projectsList.append(projectsToAdd);
  }
  // getProjects();
  // getTasks();

  function createNewProjectRow(project) {
    const newLi = $(`<li>${project.name}</li>`);
    newLi.data(`project`, project);
    return newLi;
  }

  // function getProjects(user) {
  //   $.get(`/api/projects`, data => {
  //     for (let i = 0; i < data.length; ++i) {
  //       rowsToAdd.push(createProjectsRow(data[i]));
  //     }
  //     renderProjectsList(rowsToAdd);
  //     data.name.val(``);
  //   });
  // }

  // function renderProjectsList(rows) {
  //   projectsList
  //     .children()
  //     .not(`:last`)
  //     .remove();
  //   projectsContainer.children(`.alert`).remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     projectsList.prepend(rows);
  //   } else {
  //     renderEmpty();
  //   }
  // }

  //   function createTasksRow(taskData) {
  //     const newLi = $(`<li>`);
  //     newLi.data(`task`, taskData);
  //     newLi.append(`<li>${taskData.task}<li>`);
  //     return newLi;
  //   }

  //   function getTasks() {
  //     $.get(`/api/tasks`, data => {
  //       for (let i = 0; i < data.length; ++i) {
  //         rowsToAdd.push(createTasksRow(data[i]));
  //       }
  //       renderTasksList(rowsToAdd);
  //       data.title.val(``);
  //     });
  //   }

//   function renderTasksList(rows) {
//     tasksList
//       .children()
//       .not(`:last`)
//       .remove();
//     tasksContainer.children(`.alert`).remove();
//     if (rows.length) {
//       console.log(rows);
//       tasksList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }
});
