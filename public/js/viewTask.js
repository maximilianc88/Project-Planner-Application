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
  const taskTitleEl = $(`#taskTitle`);
  const editTaskTitleText = event => {
    const taskTargetId = $(event.target).attr(`id`);
    const taskTargetValue = $(event.target)
      .text()
      .trim();
    const targetData = $(event.target).data();
    console.log(taskTargetId);
    console.log(taskTargetValue);
    console.log(targetData);
    const textEl = `<textarea class="textarea is-medium" id="${taskTargetId}" rows="2" type="text">`;
    $(`#${taskTargetId}`).replaceWith(textEl);
    $(`#${taskTargetId}`).val(taskTargetValue);

    $(document).click(secondEvent => {
      if (!$(secondEvent.target).closest(`#${taskTargetId}`).length) {
        const newText = $(`#${taskTargetId}`).val();
        const newParagraphEl = $(
          `<div class="title is-2" data-taskId="{{ this.task.dataValues.id }}" id="id="${taskTargetId}">`
        );
        newParagraphEl.text(newText);
        newParagraphEl.data(taskTargetValue);
        $(`#${taskTargetId}`).replaceWith(newParagraphEl);
      }
    });
  };
  taskTitleEl.dblclick(event => {
    editTaskTitleText(event);
  });
};

$(document).ready(onReady);
