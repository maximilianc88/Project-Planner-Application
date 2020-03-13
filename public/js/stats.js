"use strict";
let unassigned = 0;
let open = 0;
let inProgress = 0;
let complete = 0;
let closed = 0;

function getData() {
  $.get(`/api/tasks`, data => {
    for (let i = 0; i < data.length; ++i) {
      if (data[i].status_code === 1) {
        open += 1;
      }
      if (data[i].status_code === 0) {
        unassigned += 1;
      }
      if (data[i].status_code === 2) {
        inProgress += 1;
      }
      if (data[i].status_code === 3) {
        complete += 1;
      }
      if (data[i].status_code === 4) {
        closed += 1;
      }
    }
  }).then(() => {
    const chartCanvas = document
      .getElementById(`myChartTeamProjects`)
      .getContext(`2d`);
    window.chartColors = {
      red: `#FF312B`,
      orange: `#FF8438`,
      yellow: `#FBFF4F`,
      green: `#4EFF51`,
      blue: `#156CB3`
    };
    const chart1 = new Chart(chartCanvas, {
      // The type of chart we want to create
      type: `doughnut`,
      // The data for our dataset
      data: {
        labels: [`Unassigned`, `Open`, `In-Progress`, `Completed`, `Closed`],

        datasets: [
          {
            label: `My First dataset`,
            backgroundColor: [
              window.chartColors.red,
              window.chartColors.orange,
              window.chartColors.yellow,
              window.chartColors.green,
              window.chartColors.blue
            ],
            data: [unassigned, open, inProgress, complete, closed]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  });
}
getData();
let loggedInUser = ``;
function readCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(`;`);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ` `) {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      const userName = c.substring(nameEQ.length, c.length);
      loggedInUser = userName;
    }
  }
  return null;
}
readCookie(`userName`);

let loggedInUserId = ``;
$.get(`/api/users/`, data => {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].user_name == loggedInUser) {
      const id = data[i].user_id;
      loggedInUserId = id;
    }
  }
  // console.log(loggedInUserId);
}).then(() => {
  $.get(`/api/users/${loggedInUserId}`, userInfo => {
    console.log(userInfo.Tasks);
    const userTasks = userInfo.Tasks;
    let userUnassigned = 0;
    let userOpen = 0;
    let userInProgress = 0;
    let userComplete = 0;
    let userClosed = 0;
    for (let i = 0; i < userTasks.length; ++i) {
      if (userTasks[i].status_code === 1) {
        userOpen += 1;
      }
      if (userTasks[i].status_code === 0) {
        userUnassigned += 1;
      }
      if (userTasks[i].status_code === 2) {
        userInProgress += 1;
      }
      if (userTasks[i].status_code === 3) {
        userComplete += 1;
      }
      if (userTasks[i].status_code === 4) {
        userClosed += 1;
      }
    }
    const chartCanvas = document
      .getElementById(`myChartTasks`)
      .getContext(`2d`);
    window.chartColors = {
      red: `#FF312B`,
      yellow: `#FBFF4F`,
      green: `#4EFF51`,
      blue: `#156CB3`
    };
    const chart2 = new Chart(chartCanvas, {
      // The type of chart we want to create
      type: `doughnut`,
      // The data for our dataset
      data: {
        labels: [`Open`, `In-Progress`, `Completed`, `Closed`],

        datasets: [
          {
            label: `My First dataset`,
            backgroundColor: [
              window.chartColors.red,
              window.chartColors.yellow,
              window.chartColors.green,
              window.chartColors.blue
            ],
            data: [userOpen, userInProgress, userComplete, userClosed]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  });
});
