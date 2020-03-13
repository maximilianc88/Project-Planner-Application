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
    }).then(() => {
      console.log(`Success`);
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
    console.log(newDataObj);
    putNewDescription(newDataObj);
  };



  const finishEditElement = textareaEl => {
    $(document).click(event => {
      if (!$(event.target).closest(textareaEl.length)) {
        const newText = textareaEl.val();
        console.log(newText);
        const parentEl = textareaEl.parent();
        parentEl.empty();
        // const newParagraphEl = $(`<p>`);
        // newParagraphEl.text(newText);
        // newParagraphEl.data(targetId);
        // parentEl.replaceWith(newParagraphEl);
        // $(`#${targetId}`).replaceWith(newParagraphEl);
      }
    });
  };

  const editElementText = event => {
    console.log($(event.target));
    $(event.target).hide();
    // if ($(event.target).attr(`hidden`) === `false`) {
    //   console.log(`false`);
    // }
    const parentEl = $(event.target).parent();
    const parentElementId = parentEl.attr(`id`); // this is the html element id
    const targetValue = $(event.target).text().trim(); // this is description
    const targetDataAttr = $(event.target).data(); // this is an object
    console.log(parentElementId);
    console.log(targetValue);
    console.log(targetDataAttr);
    const textareaEl = $(event.target).siblings(`textarea`);
    console.log(textareaEl);
    textareaEl.val(targetValue);
    textareaEl.css(`display`, `block`);
    // const textareaEl = $(`<textarea class="textarea is-medium" rows="2" type="text">`);
    // textareaEl.val(targetValue);
    // parentEl.append(textareaEl);
    // $(`#${targetId}`).replaceWith(textEl);
    // $(`#${targetId}`).val(targetValue);

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
