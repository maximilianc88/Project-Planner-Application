"use strict";

$(document).ready(() => {

  const editButton = $(`.edit-button`);

  const toggleEditMode = () => {
    const paraEl = $(`p.description`);
    const textareaEl = $(`textarea.description`);
    paraEl.css(`display`) === `block` ? paraEl.css(`display`, `none`) : paraEl.css(`display`, `block`);
    textareaEl.css(`display`) === `block` ? textareaEl.css(`display`, `none`) : textareaEl.css(`display`, `block`);
  };

  const editDescription = () => {
    toggleEditMode();
    editButton.text(`Save`);
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
    const paraEl = $(`p.description`);
    const textareaEl = $(`textarea.description`);
    paraEl.text(textareaEl.val().trim());
    const id = paraEl.data(`project-id`);
    const description = textareaEl.val().trim();
    const newDataObj = { id, description};
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
