const dashboardData = {
  usersByCountries: {
    all: {
      datasets: [
        {
          label: 'Users by Countries',
          data: [30, 20, 10, 15, 20, 5],
          backgroundColor: getChartColors(),
        },
      ],
      labels: ['US', 'Canada', 'Mexico', 'Japan', 'UK', 'Spain'],
    },
    active: {
      datasets: [
        {
          label: 'Users by Countries',
          data: [10, 15, 12, 20, 35, 8],
          backgroundColor: getChartColors(),
        },
      ],
      labels: ['US', 'Canada', 'Mexico', 'Japan', 'UK', 'Spain'],
    },
  },
  usageTypes: {
    platform: {
      datasets: [
        {
          label: 'Usage by Platforms',
          data: [60, 40],
          backgroundColor: getChartColors(),
        },
      ],
      labels: ['PC', 'Mobile'],
    },
    pc: {
      datasets: [
        {
          label: 'Usage by OS(PC)',
          data: [40, 40, 10, 10],
          backgroundColor: getChartColors(),
        },
      ],
      labels: ['Windows', 'Mac', 'Ubuntu', 'Others'],
    },
    mobile: {
      datasets: [
        {
          label: 'Usage by OS(PC)',
          data: [75, 25],
          backgroundColor: getChartColors(),
        },
      ],
      labels: ['Android', 'iOS'],
    },
  }
}

$(document).ready(function () {
  // Users by Country Chart
  const usersByCountryCtx = document.getElementById('users-by-country');
  usersByCountryCtx.height = 250;
  const usersByCountriesChart = new Chart(usersByCountryCtx, {
    type: 'doughnut',
    data: dashboardData.usersByCountries.all,
    options: {
      maintainAspectRatio: false,
      responsive: true,
      cutoutPercentage: 55,
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      legend: {
        display: true,
        position: 'left',
      },
      tooltips: {
        titleFontFamily: 'Poppins',
        xPadding: 15,
        yPadding: 10,
        caretPadding: 0,
        bodyFontSize: 14,
      },
    },
  });
  
  // Filter Users by Country Chart
  $('.filter-usersbycountries').click(function (e) {
    const chartLabel = $(this).attr('data-chart').toLowerCase();
    const chartData = dashboardData.usersByCountries[chartLabel];
    usersByCountriesChart.data = chartData;
    usersByCountriesChart.update();
  });

  // Usage Types Chart
  const useageTypeCtx = document.getElementById('usage-type');
  useageTypeCtx.height = 250;
  const usageTypeChart = new Chart(useageTypeCtx, {
    type: 'doughnut',
    data: dashboardData.usageTypes.platform,
    options: {
      maintainAspectRatio: false,
      responsive: true,
      cutoutPercentage: 55,
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      legend: {
        display: true,
        position: 'left',
      },
      tooltips: {
        titleFontFamily: 'Poppins',
        xPadding: 15,
        yPadding: 10,
        caretPadding: 0,
        bodyFontSize: 14,
      },
    },
  });

  
  // Filter Usage Type
  $('.filter-usagetype').click(function (e) {
    const chartLabel = $(this).attr('data-chart').toLowerCase();
    const chartData = dashboardData.usageTypes[chartLabel];
    usageTypeChart.data = chartData;
    usageTypeChart.update();
  });

});
