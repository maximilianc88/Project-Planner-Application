"use strict";

const login = require(`../public/js/logIn.js`);

describe(`getUserVerifier`, () => {

  it(`test navigation happened`, () => {
    delete window.location;
    window.location = { assign: jest.fn() };

    const userData = {
      // eslint-disable-next-line camelcase
      user_name: `test`,
      password: `testPassword`
    };

    const responseData = {
      // eslint-disable-next-line camelcase
      user_name: `test`,
      password: `testPassword`
    };

    login.getUserVerifier(userData)(responseData);

    expect(window.location.assign).toBeCalledWith(`/dashboard/test`);
  });
  it(`test navigation doesn't happen`, () => {
    delete window.location;
    window.location = { assign: jest.fn() };

    const userData = {
      // eslint-disable-next-line camelcase
      user_name: `test`,
      password: `testPassword`
    };

    const responseData = {
      // eslint-disable-next-line camelcase
      user_name: `test`,
      password: `testPassword1`
    };

    login.getUserVerifier(userData)(responseData);

    expect(window.location.assign).not.toBeCalledWith(`/dashboard/test`);
  });
});
