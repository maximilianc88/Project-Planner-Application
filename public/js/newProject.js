'use strict';

$(document).ready(() => {
  const selectTeam = $(`.select-team`);
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
});
