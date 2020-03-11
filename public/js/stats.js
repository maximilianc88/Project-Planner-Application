"use strict";
let unassigned = 0;
let open = 0;
let inProgress = 0;
let complete = 0;
let closed = 0;

function getData() {
  $.get(`/api/tasks`, data => {
    console.log(data);
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
    console.log(open);
    console.log(closed);
    console.log(inProgress);
    console.log(unassigned);
    console.log(complete);
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
    console.log(chart1);
  });
}
getData();

const chartCanvas2 = document.getElementById(`myChart`).getContext(`2d`);
window.chartColors = {
  red: `#FF312B`,
  orange: `#FF8438`,
  yellow: `#FBFF4F`,
  green: `#4EFF51`,
  blue: `#156CB3`
};
const chart2 = new Chart(chartCanvas2, {
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
        data: [four, ten, eight, five, two]
      }
    ]
  },

  // Configuration options go here
  options: {}
});
console.log(chart2);
