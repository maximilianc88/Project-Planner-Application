'use strict';

const descriptionEl = $(`#description`);

const editElementText = event => {
  const targetId = $(event.target).attr(`id`);
  const targetValue = $(event.target).text().trim();
  const targetDataAttr = $(event.target).data(); // this is an object
  console.log(targetId);
  console.log(targetValue);
  console.log(targetDataAttr);
  const textEl = `<textarea class="textarea is-medium" id="${targetId}" rows="2" type="text">`;
  $(`#${targetId}`).replaceWith(textEl);
  $(`#${targetId}`).val(targetValue);

  $(document).click(secondEvent => {
    if (!$(secondEvent.target).closest(`#${targetId}`).length) {
      const newText = $(`#${targetId}`).val();
      const newParagraphEl = $(`<p class="title is-5" id="${targetId}">`);
      newParagraphEl.text(newText);
      newParagraphEl.data(targetDataAttr);
      $(`#${targetId}`).replaceWith(newParagraphEl);
    }
  });
};

// event listeners
descriptionEl.dblclick(event => {
  editElementText(event);
});
