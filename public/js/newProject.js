"use strict";

$(document).ready(() => {
  const selectTeam = $(`.select-team`);
  const cancelButton = $(`.cancel-button`);
  cancelButton.on(`click`, () => {
    const home = `/`;
    window.location = home;
  });
  selectTeam.change(() => {
    // get team-id from selected option
    console.log($(`.select-team option:selected`).data(`team-id`));
  });

  const addTeamsToOptions = arr => {
    if (!arr) {
      return;
    }
    for (const teamObj of arr) {
      const option = $(`<option>`);
      option.data(`team-id`, teamObj.id);
      option.append(`${teamObj.name}`);
      selectTeam.append(option);
    }
    return;
  };

  const getAllTeams = () => {
    $.get(`/api/teams`, (data, status) => {
      console.log(`Data: ${data}, Status: ${status}`);
      addTeamsToOptions(data);
    });
  };

  getAllTeams();

  $(`#newProjectSubmit`).on(`click`, () => {
    const newProject = {
      name: $(`#new-project-name`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      team_id: $(`.select-team option:selected`).data(`team-id`),
      description: $(`#new-project-description`)
        .val()
        .trim()
    };
    console.log(newProject);
    $.ajax(`/api/projects`, {
      type: `POST`,
      data: newProject
    }).then(() => {
      console.log(`Success`);
      if (document.getElementById(`add-task`).checked) {
        const newTask = `/newTask`;
        window.location = newTask;
      } else if (document.getElementById(`no-add-task`).checked) {
        const goHome = `/`;
        window.location = goHome;
      }
    });
  });
});
