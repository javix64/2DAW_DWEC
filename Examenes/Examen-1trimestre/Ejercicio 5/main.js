google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Year');
    data.addColumn('number', 'Poblacion');

    data.addColumn({role:'style'});
    data.addRows([
      [2017, 14252,'color:green;opacity: 0.2'],
      [2018, 23360,'color:green;fill-opacity: 0.4'],
      [2019, 40421,'color:green;fill-opacity: 0.6'],
      [2020, 43500,'color:green;fill-opacity: 0.8']
    ]);

    var options = {'title':'Evolución de la población de Navalcarnero',
                   'width':700,
                   'height':700,
                   'chartArea': {
                    'backgroundColor': {
                        'fill': 'lightblue',
                        'opacity': 20
                     },
                    },
                   animation:{
                      duration: 5000,
                      easing: 'out',
                      startup: true
                    },
                    vAxis: {minValue:0, maxValue:1000}
                  };
  

    var chart = new google.visualization.ColumnChart(document.body);
    chart.draw(data, options);
  }