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

async function isUsernameUnique(newUser) {
  let isUnique = false;
  await $.ajax(`/api/users/`, {
    type: `GET`
  }).then(usersObj => {
    console.log(usersObj);
    for (let i = 0; i < usersObj.length; i++) {
      console.log(`i: ${i}`);
      console.log(`usersObj[i].user_name: ${usersObj[i].user_name}`);
      console.log(`newUser.user_name: ${newUser.user_name}`);
      if(usersObj[i].user_name === newUser.user_name) {
        return;
      }
    }

    console.log(`unique`);
    isUnique = true;
  }).promise();

  return isUnique;
}

const getAllTeams = selectTeam => {
  $.get(`/api/teams`, (data, status) => {
    console.log(`Data: ${data}, Status: ${status}`);
    addTeamsToOptions(data, selectTeam);
  });
};

function validateCreationForm(newUser) {
  if (newUser.user_name === ``) {
    return `Username cannot be empty`;
  }

  if (newUser.first_name === ``) {
    return `First Name cannot be empty`;
  }

  if (newUser.last_name === ``) {
    return `Last Name cannot be empty`;
  }

  if (newUser.password === ``) {
    return `Password cannot be empty`;
  }

  if (newUser.team_id === ``) {
    return `Must assign a team`;
  }

  if (!isUsernameUnique(newUser)) {
    return `Username already exists! `;
  }

  return null;
}


const onReady = () => {
  const selectTeam = $(`.select-team`);
  $(`#error`).hide();

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


    const errorMessage = validateCreationForm(newUser);
    if (errorMessage !== null) {
      const errorElement = $(`#error`);
      errorElement.text(errorMessage);
      errorElement.show();
    } else {
      $.ajax(`/api/users`, {
        type: `POST`,
        data: newUser
      }).then(() => {
        console.log(`Success`);
        window.location.assign(`/`);
      });
    }
  });
};

$(document).ready(onReady);

if (typeof exports !== `undefined`) {
  exports.addTeamsToOptions = addTeamsToOptions;
}
