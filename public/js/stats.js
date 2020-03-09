"use strict";

$(document).ready(() => {
  const chartCanvas = document
    .getElementById(`myChartTeamProjects`)
    .getContext(`2d`);
  window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(231,233,237)"
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
            window.chartColors.grey
          ],
          data: [4, 10, 8, 5, 2]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
});
