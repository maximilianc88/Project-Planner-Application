"use strict";

const $ = require(`jquery`);
const signUp = require(`../public/js/signUp.js`);

describe(`addTeamsToOptions`, () => {
  it(`should not create child element for undefined input`, () => {
    const selectTeam = $(`<select>`);

    signUp.addTeamsToOptions(undefined, selectTeam);

    expect(selectTeam.children().length).toEqual(0);
  });

  it(`should not create child element for empty array input`, () => {
    const selectTeam = $(`<select>`);

    signUp.addTeamsToOptions([], selectTeam);

    expect(selectTeam.children().length).toEqual(0);
  });

  it(`should set inner text to expected name on child option element`, () => {
    const expectedName = `name`;

    const arr = [
      {
        id: 1,
        name: expectedName
      }
    ];

    const selectTeam = $(`<select>`);

    signUp.addTeamsToOptions(arr, selectTeam);

    expect(
      selectTeam
        .children()
        .eq(0)
        .text()
    ).toEqual(expectedName);
  });

  it(`should set data-team-id to expected ID on child option element`, () => {
    const expectedId = 2;

    const arr = [
      {
        id: expectedId,
        name: `name`
      }
    ];

    const selectTeam = $(`<select>`);

    signUp.addTeamsToOptions(arr, selectTeam);

    expect(
      selectTeam
        .children()
        .eq(0)
        .data(`team-id`)
    ).toEqual(expectedId);
  });

  it(`should have two options when two items passed in arr`, () => {
    const arr = [
      {
        id: 1,
        name: `name1`
      },
      {
        id: 2,
        name: `name2`
      }
    ];

    const selectTeam = $(`<select>`);

    signUp.addTeamsToOptions(arr, selectTeam);

    expect(selectTeam.children().length).toEqual(2);
  });
});
