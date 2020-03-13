"use strict";

$(document).ready(() => {
  const loggedIn = $(`#user`).attr(`value`);

  $.ajax(`/api/users/${loggedIn}`, {
    type: `GET`
  }).then(res => {
    for (let i=0; i<res.Tasks.length; i++){
      const newMyTask = $(`<p class></p>`);
      const newMyTaskLink = $(`<a href=../task/${res.Tasks[i].id}></a>`);
      // eslint-disable-next-line max-len
      const deleteMyTaskIcon = $(`<i class="fas fa-minus-circle myTask-minus-icon" data-MytaskId="${res.Tasks[i].id}" </i>`).hide();
      newMyTaskLink.html(res.Tasks[i].title);
      newMyTask.append(deleteMyTaskIcon);
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
  $(`#myTask-delete`).click (() => {
    $(`.myTask-minus-icon`).show();
  });
  $(document).on(`click`, `i.myTask-minus-icon`, () => {
    const myTaskId = $(event.target).data(`mytaskid`);
    $.ajax(`/api/tasks/${myTaskId}`, {
      type: `DELETE`
    }).then(() => {
      console.log(`Success`);
      location.reload();
    });
  });
});
