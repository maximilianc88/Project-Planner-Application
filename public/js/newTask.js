"use strict";

const addProjectsToOptions = (arr, selectProject) => {
  if (!arr) {
    return;
  }
  for (const projectObj of arr) {
    const option = $(`<option>`);
    option.data(`project-id`, projectObj.id);
    option.data(`team-id`, projectObj.team_id);
    option.append(`${projectObj.name}`);
    selectProject.append(option);
  }
};

const addUsersToOptions = (arr, selectUser) => {
  if (!arr) {
    return;
  }
  for (const userObj of arr) {
    console.log(userObj);
    const option = $(`<option>`);
    option.data(`user-id`, userObj.user_id);
    option.append(`${userObj.user_name}`);
    selectUser.append(option);
  }
  return;
};

const getAllProjects = selectProject => {
  $.get(`/api/projects`, (data, status) => {
    console.log(`Data: ${data}, Status: ${status}`);
    addProjectsToOptions(data, selectProject);
  });
};

const getAllUsersByTeamId = (teamId, selectUser) => {
  $.get(`/api/teams/${teamId}`, (data, status) => {
    console.log(status);
    if (!data) {
      return;
    }
    const userObjArr = data.Users;
    console.log(userObjArr);
    addUsersToOptions(userObjArr, selectUser);
  });
};

const resetOptionList = selectUser => {
  selectUser.empty();
  const option = $(`<option>`);
  option.append(`Select User`);
  selectUser.append(option);
};

const onReady = () => {
  const selectProject = $(`.select-project`);
  const selectUser = $(`.select-user`);
  const cancelButton = $(`.cancel-button`);
  cancelButton.on(`click`, () => {
    const home = `/`;
    window.location = home;
  });

  // console.log out selected projectd id
  selectProject.change(() => {
    // get project-id from selected option
    const selectedProjectId = $(`.select-project option:selected`).data(
      `project-id`
    );
    const selectedTeamId = $(`.select-project option:selected`).data(`team-id`);
    console.log(`Selected Project ID: ${selectedProjectId}`);
    console.log(`Selected Team ID: ${selectedTeamId}`);
    getAllUsersByTeamId(selectedTeamId, selectUser);
    resetOptionList(selectUser);
  });

  // console.log out selected user id
  selectUser.change(() => {
    // get user-id from selected option
    const selectedUser = $(`.select-user option:selected`);
    console.log(`Selected User ID: ${selectedUser.data(`user-id`)}`);
  });

  getAllProjects(selectProject);

  $(`#new-task-submit`).on(`click`, () => {
    const newTask = {
      title: $(`#new-task-name`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      project_id: $(`.select-project option:selected`).data(`project-id`),
      // eslint-disable-next-line camelcase
      assignee_id: $(`.select-user option:selected`).data(`user-id`),
      description: $(`#new-task-description`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      team_id: $(`.select-project option:selected`).data(`team-id`)
    };
    console.log(newTask);
    $.post(`api/tasks`, newTask)
      .then(() => {
        console.log(`Success`);
        const goHome = `/`;
        window.location = goHome;
      });
  });
};

$(document).ready(onReady);

if (typeof exports !== `undefined`) {
  exports.addProjectsToOptions = addProjectsToOptions;
  exports.addUsersToOptions = addUsersToOptions;
}
