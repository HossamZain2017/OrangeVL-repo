 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawAnthonyChart);
      google.charts.setOnLoadCallback(drawAnthonyCharts);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Site name', 5],
          ['Status', 2],
          ['Requestor', 8],
          ['Note', 3]
          
        ]);

        // Set chart options
        var options = {
                       'width':300,
                       'height':300,
                        colors: ['#1e65f3', '#f5dc0c', '#ff6600', '#69cb09'],
                        'legend':'bottom',
                        chartArea:{top:10},

                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie-charts'));
        chart.draw(data, options);
      }




      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawAnthonyChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Site name', 7],
          ['Status', 2],
          ['Requestor', 6],
          ['Note', 3]
          
        ]);

        // Set chart options
        var options = {
                       'width':300,
                       'height':300,
                        colors: ['#1e65f3', '#f5dc0c', '#ff6600', '#69cb09'],
                        'legend':'bottom',
                        chartArea:{top:10,}
 
                     };
                    

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie-charts1'));
        chart.draw(data, options);
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawAnthonyCharts() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Site name', 1],
          ['Status', 4],
          ['Requestor', 8],
          ['Note', 2]
          
        ]);

        // Set chart options
        var options = {
                       'width':300,
                       'height':300,
                        colors: ['#1e65f3', '#f5dc0c', '#ff6600', '#69cb09'],
                        'legend':'bottom',
                        chartArea:{top:10,}
 
                     };
                    

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie-charts2'));
        chart.draw(data, options);
      }