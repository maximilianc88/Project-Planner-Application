"use strict";

$(document).ready( () => {
  $(`.project-minus-icon`).hide();
  $(`.task-minus-icon`).hide();

  $(`#project-delete`).on(`click`, () => {
    $(`.project-minus-icon`).show();
  });
  $(`.project-minus-icon`).on(`click`, () => {
    const projectId = $(this.event.target).data(`projectid`);
    $.ajax(`/api/projects/${projectId}`, {
      type: `DELETE`
    }).then(() => {
      console.log(`Success`);
      location.reload();
    });
  });

  $(`#task-delete`).on(`click`, () => {
    $(`.task-minus-icon`).show();
  });
  $(`.task-minus-icon`).on(`click`, () => {
    const taskId = $(this.event.target).data(`taskid`);
    $.ajax(`/api/tasks/${taskId}`, {
      type: `DELETE`
    }).then(() => {
      console.log(`Success`);
      location.reload();
    });
  });
});


