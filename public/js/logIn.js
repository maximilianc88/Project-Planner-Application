"use strict";

$(document).ready(() => {
  const signInButt = $(`#sign-in`);
  const username = $(`#username`);
  // const password = $(`#password`);
  const createAccount = $(`#create-account`);

  // Add event listener on the Create Account button to redirect them to the Sign Up page
  createAccount.on(`click`, event => {
    event.preventDefault();
    window.location.replace(`/signup`);
  });

  // Wchen the form is submitted, we validate there's a username
  signInButt.on(`click`, event => {
    event.preventDefault();
    const userData = {
      // eslint-disable-next-line camelcase
      user_name: username.val().trim()
      // password: password.val().trim()
    };
    if (!userData.user_name) {
      return;
    }

    // If we have a user name we run the loginUser function and clear the form
    loginUser(userData.user_name);
    function loginUser(user) {
      const userURL = `/api/users/usercheck/${user}`;
      $.get(userURL, data => {
        console.log(user);
        console.log(data);
        if (!data){
          console.log(`failure`);
        } else {
          console.log(`proceed`);
          window.location.replace(`/dashboard`);
        }
        return;
      });
    }
  });
});
