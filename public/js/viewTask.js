"use strict";

const onReady = () => {
  $(`#statusUpdateSubmit`).on(`click`, () => {
    const updateStatus = {
      id: $(`.title`).data(`taskid`),
      // eslint-disable-next-line camelcase
      status_code: $(`.select-status option:selected `).data(`id`)
    };
    console.log(updateStatus);
    $.ajax(`/api/tasks`, {
      type: `PUT`,
      data: updateStatus
    }).then(() => {
      console.log(`Success`);
      location.reload();
    });
  });
};

$(document).ready(onReady);
