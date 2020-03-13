"use strict";

$.ajax(`/api/users/`, {
  type: `GET`
}).then(user => {
  const teamAvailable = $(`#updateAssigneeHeading`).attr(`data-teamId`);
  const assigneeOptions = [];
  for (let i = 0; i < user.length; ++i) {
    if (user[i].team_id == teamAvailable) {
      assigneeOptions.push(user[i]);
    }
  }
  console.log(assigneeOptions);
});
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

  const taskTitleEl = $(`#taskTitle`);
  const editTaskTitleText = event => {
    const taskTargetId = $(event.target).attr(`id`);
    const taskTargetValue = $(event.target)
      .text()
      .trim();
    const textEl = `<textarea class="textarea is-medium" id="${taskTargetId}" rows="2" type="text">`;
    $(`#${taskTargetId}`).replaceWith(textEl);
    $(`#${taskTargetId}`).val(taskTargetValue);

    $(document).click(secondEvent => {
      if (!$(secondEvent.target).closest(`#${taskTargetId}`).length) {
        const newText = $(`#${taskTargetId}`).val();
        const newDivEl = $(
          `<div class="title is-2" data-taskId="{{ this.task.dataValues.id }}" id="${taskTargetId}">`
        );
        newDivEl.text(newText);
        newDivEl.data(taskTargetValue);
        $(`#${taskTargetId}`).replaceWith(newDivEl);
      }
    });
  };
  taskTitleEl.dblclick(event => {
    editTaskTitleText(event);
  });
  const taskDescriptionEl = $(`#taskDescription`);
  const editTaskDescriptionText = event => {
    const taskDescriptionTargetId = $(event.target).attr(`id`);
    const taskDescriptionValue = $(event.target)
      .text()
      .trim();

    const textEl2 = `<textarea class="textarea is-medium" id="${taskDescriptionTargetId}" rows="2" type="text">`;
    $(`#${taskDescriptionTargetId}`).replaceWith(textEl2);
    $(`#${taskDescriptionTargetId}`).val(taskDescriptionValue);
    $(document).click(secondEvent => {
      if (
        !$(secondEvent.target).closest(`#${taskDescriptionTargetId}`).length
      ) {
        const newText = $(`#${taskDescriptionTargetId}`).val();
        const newParagraphEl = $(
          `    <p id="${taskDescriptionTargetId}" class="title is-5">
`
        );
        newParagraphEl.text(newText);
        newParagraphEl.data(taskDescriptionValue);
        $(`#${taskDescriptionTargetId}`).replaceWith(newParagraphEl);
      }
    });
  };
  taskDescriptionEl.dblclick(event => {
    editTaskDescriptionText(event);
  });
};

$(document).ready(onReady);
