"use strict";

$(document).ready(() => {
  const signUpForm = $(`.form-group`);
  const usernameInput = $(`#username`);
  const firstNameInput = $(`#first-name`);
  const lastNameInput = $(`#last-name`);
  const team = $(`#team`);

  signUpForm.on(`submit`, event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      team
    };

    if (!userData.username || !userData.firstName || !userData.lastName) {
      return;
    }

    signUpUser(userData.username, userData.firstName, userData.lastName);
    usernameInput.val(``);
    firstNameInput.val(``);
    lastNameInput.val(``);
  });

  function signUpUser(username, firstName, lastName) {
    $.post(`/api/signup`, {
      username,
      firstName,
      lastName,
      team
    })
      .then(() => {
        window.location.replace(`/dashboard`);
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    const numFadeMs = 500;
    $(`#alert .msg`).text(err.responseJSON);
    $(`#alert`).fadeIn(numFadeMs);
  }
});
