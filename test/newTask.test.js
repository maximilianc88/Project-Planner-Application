/* eslint-disable camelcase */
"use strict";

const $ = require(`jquery`);
const newTask = require(`../public/js/newTask.js`);

describe(`addProjectsToOptions`, () => {
  it(`should not create child element for undefined input`, () => {
    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions(undefined, selectProject);

    expect(selectProject.children().length).toEqual(0);
  });

  it(`should not create child element for empty array input`, () => {
    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions([], selectProject);

    expect(selectProject.children().length).toEqual(0);
  });

  it(`should set inner text to expected name on child option element`, () => {
    const expectedName = `name`;

    const arr = [
      {
        projectId: 1,
        teamId: 1,
        name: expectedName
      }
    ];
    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions(arr, selectProject);

    expect(
      selectProject
        .children()
        .eq(0)
        .text()
    ).toEqual(expectedName);
  });

  it(`should set data-project-id to expected ID on child option element`, () => {
    const expectedId = 2;

    const arr = [
      {
        id: expectedId,
        team_id: 1,
        name: `name`
      }
    ];

    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions(arr, selectProject);

    expect(
      selectProject
        .children()
        .eq(0)
        .data(`project-id`)
    ).toEqual(expectedId);
  });

  it(`should set data-team-id to expected ID on child option element`, () => {
    const expectedTeamId = 4;

    const arr = [
      {
        id: 3,
        // eslint-disable-next-line camelcase
        team_id: expectedTeamId,
        name: `name`
      }
    ];

    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions(arr, selectProject);

    expect(
      selectProject
        .children()
        .eq(0)
        .data(`team-id`)
    ).toEqual(expectedTeamId);
  });

  it(`should have two options when two items passed in arr`, () => {
    const arr = [
      {
        id: 1,
        team_id: 1,
        name: `name1`
      },
      {
        id: 2,
        team_id: 2,
        name: `name2`
      }
    ];

    const selectProject = $(`<select>`);

    newTask.addProjectsToOptions(arr, selectProject);

    expect(selectProject.children().length).toEqual(2);
  });
});

describe(`addUsersToOptions`, () => {
  it(`should not create child element for undefined input`, () => {
    const selectUser = $(`<select>`);

    newTask.addUsersToOptions(undefined, selectUser);

    expect(selectUser.children().length).toEqual(0);
  });

  it(`should not create child element for empty array input`, () => {
    const selectUser = $(`<select>`);

    newTask.addUsersToOptions([], selectUser);

    expect(selectUser.children().length).toEqual(0);
  });

  it(`should set inner text to expected name on child option element`, () => {
    const expectedName = `name`;

    const arr = [
      {
        user_id: 1,
        user_name: expectedName
      }
    ];

    const selectUser = $(`<select>`);

    newTask.addUsersToOptions(arr, selectUser);

    expect(
      selectUser
        .children()
        .eq(0)
        .text()
    ).toEqual(expectedName);
  });

  it(`should set data-user-id to expected ID on child option element`, () => {
    const expectedId = 1;

    const arr = [
      {
        user_id: expectedId,
        user_name: `name`
      }
    ];

    const selectUser = $(`<select>`);

    newTask.addUsersToOptions(arr, selectUser);

    expect(
      selectUser
        .children()
        .eq(0)
        .data(`user-id`)
    ).toEqual(expectedId);
  });

  it(`should have two options when two items passed in arr`, () => {
    const arr = [
      {
        user_id: 1,
        user_name: `name1`
      },
      {
        user_id: 2,
        user_name: `name2`
      }
    ];

    const selectUser = $(`<select>`);

    newTask.addUsersToOptions(arr, selectUser);

    expect(selectUser.children().length).toEqual(2);
  });
});
