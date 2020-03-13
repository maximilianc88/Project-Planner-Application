"use strict";

const addTeamsToOptions = (arr, selectTeam) => {
  if (!arr) {
    return;
  }
  for (const teamObj of arr) {
    const option = $(`<option>`);
    option.data(`team-id`, teamObj.id);
    option.append(`${teamObj.name}`);
    selectTeam.append(option);
  }
};

const getAllTeams = selectTeam => {
  $.get(`/api/teams`, (data, status) => {
    console.log(`Data: ${data}, Status: ${status}`);
    addTeamsToOptions(data, selectTeam);
  });
};

const onReady = () => {
  const selectTeam = $(`.select-team`);
  $(`#back-button`).on(`click`, () => {
    const home = `/`;
    window.location = home;
  });

  selectTeam.change(() => {
    // get team-id from selected option
    console.log($(`.select-team option:selected`).data(`team-id`));
  });

  getAllTeams(selectTeam);

  $(`#sign-up-button`).on(`click`, () => {
    const newUser = {
      // eslint-disable-next-line camelcase
      user_name: $(`#username`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      first_name: $(`#first-name`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      last_name: $(`#last-name`)
        .val()
        .trim(),
      password: $(`#password`)
        .val()
        .trim(),
      // eslint-disable-next-line camelcase
      team_id: $(`.select-team option:selected`).data(`team-id`)
    };
    console.log(newUser);
    $.ajax(`/api/users`, {
      type: `POST`,
      data: newUser
    }).then(() => {
      console.log(`Success`);
      window.location.assign(`/`);
    });
  });
};

$(document).ready(onReady);

if (typeof exports !== `undefined`) {
  exports.addTeamsToOptions = addTeamsToOptions;
}
