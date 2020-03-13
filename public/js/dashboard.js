"use strict";

$(document).ready(() => {
  const loggedIn = $(`#user`).attr(`value`);
  console.log(loggedIn);
  $.ajax(`/api/users/${loggedIn}`, {
    type: `GET`
  }).then(res => {
    console.log(res.Tasks);
    for (let i=0; i<res.Tasks.length; i++){
      console.log(res.Tasks[i]);
      const newMyTask = $(`<p class></p>`);
      const newMyTaskLink = $(`<a href=../task/${res.Tasks[i].id}></a>`);
      newMyTaskLink.html(res.Tasks[i].title);
      newMyTask.append(newMyTaskLink);
      $(`#myTaskColumn`).append(newMyTask);
    }
  });
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
