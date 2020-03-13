"use strict";

$(document).ready(() => {

  const editButton = $(`.edit-button`);
  const paraEl = $(`p.description`);
  const textareaEl = $(`textarea.description`);

  const toggleEditMode = () => {
    paraEl.css(`display`) === `block` ? paraEl.css(`display`, `none`) : paraEl.css(`display`, `block`);
    textareaEl.css(`display`) === `block` ? textareaEl.css(`display`, `none`) : textareaEl.css(`display`, `block`);
    editButton.text() === `Edit` ? editButton.text(`Save`) : editButton.text(`Edit`);
  };

  const editDescription = () => {
    toggleEditMode();
    textareaEl.val(paraEl.text().trim());
    return;
  };

  const putNewDescription = newDataObj => {
    $.ajax(`/api/project`, {
      type: `PUT`,
      data: newDataObj
    }).then(res => {
      console.log(`Affected rows: ${res}`);
    });
  };

  const saveDescription = () => {
    toggleEditMode();
    paraEl.text(textareaEl.val().trim());
    const id = paraEl.data(`project-id`);
    const description = textareaEl.val().trim();
    const newDataObj = { id, description };
    putNewDescription(newDataObj);
  };

  // event listeners
  editButton.click(() => {
    if (editButton.text() === `Edit`) {
      editDescription();
    } else {
      saveDescription();
    }
  });

});
