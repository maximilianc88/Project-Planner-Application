"use strict";

function getUserVerifier(userFormData) {
  return responseData => {
    const responseUserName = responseData.user_name;
    const responsePassword = responseData.password;
    if (
      responseUserName === userFormData.user_name &&
      responsePassword === userFormData.password
    ) {
      console.log(`proceed`);
      window.location.assign(`/dashboard/${userFormData.user_name}`);
    } else {
      console.log(`failure`);
    }
  };
}

function loginUser(userFormData) {
  $.get(`/api/users/usercheck/${userFormData.user_name}`, getUserVerifier(userFormData));
}

const onReady = () => {
  // Add event listener on the Create Account button to redirect them to the Sign Up page
  $(`#create-account`).on(`click`, event => {
    event.preventDefault();
    window.location.replace(`/signup`);
  });

  // Wchen the form is submitted, we validate there's a username
  $(`#sign-in`).on(`click`, event => {
    event.preventDefault();
    const userFormData = {
      // eslint-disable-next-line camelcase
      user_name: $(`#username`).val().trim(),
      password: $(`#password`).val().trim()
    };
    if (!userFormData.user_name) {
      return;
    }

    // If we have a user name we run the loginUser function and clear the form
    loginUser(userFormData);
  });
};

$(document).ready(onReady);

if (typeof exports !== `undefined`) {
  exports.getUserVerifier = getUserVerifier;
}
