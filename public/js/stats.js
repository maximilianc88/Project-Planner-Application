"use strict";

$(document).ready(() => {
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
  const chart = new Chart(chartCanvas, {
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
          data: [4, 10, 8, 5, 2]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
});
