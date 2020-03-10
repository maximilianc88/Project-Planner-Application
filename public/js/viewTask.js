"use strict";

const addStatusToOptions = (arr, selectStatus) => {
  if (!arr) {
    return;
  }
  for (const statusObj of arr) {
    const option = $(`<option>`);
    option.data(`status-id`, statusObj.status_code);
    option.append(`${statusObj.status_name}`);
    selectStatus.append(option);
  }
};

const getAllStatus = selectStatus => {
  $.get(`/api/status`, (data, status) => {
    console.log(`Data: ${data}, Status: ${status}`);
    addStatusToOptions(data, selectStatus);
  });
};

const onReady = () => {
  const selectStatus = $(`.select-status`);
  selectStatus.change(() => {
    console.log($(`.select-status option:selected`).data(`status-id`));
  });

  getAllStatus(selectStatus);
};

$(document).ready(onReady);

if (typeof exports !== `undefined`) {
  exports.addStatusToOptions = addStatusToOptions;
}
