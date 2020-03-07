"use strict";

$(document).ready(() => {
  const loginForm = $(`form.login`);
  const username = $(`#username`);
  const password = $(`#password`);
  const createAccount = $(`#create-account`);

  // Add event listener on the Create Account button to redirect them to the Sign Up page
  createAccount.on(`click`, event => {
    event.preventDefault();
    window.location.replace(`/signup`);
  });

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on(`submit`, event => {
    event.preventDefault();
    const userData = {
      username: username.val().trim(),
      password: password.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.username);
// loginUser - does a get to check that the user exists in the database and 
// if successful, redirects us the the dashboard
  function loginUser(user) {
    userName = user;
    if (userName) {
      userName = `/?username=${userName}`;
    }
    $.get(`/api/login${userName}`, data => {
      console.log(`Users`, data);
    })
      .then(() => {
        window.location.replace(`/dashboard`);
      })
      .catch(err => {
        // If there's an error, log the error
        console.log(err);
      });
  }
});
