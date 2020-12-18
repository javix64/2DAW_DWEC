google.charts.load('current', {'packages':['corechart']});
class Chart{
    constructor(alimento,kcal,hdc,grasas,proteinas,fibra,elemento){
        this.alimento=alimento;
        this.kcal=kcal;
        this.hdc=hdc;
        this.grasas=grasas;
        this.proteinas=proteinas;
        this.fibra=fibra;
        this.elemento=elemento;
    }
    drawChart() {

        // Crea la tabla y la estructura
        // primero pone las columnas y despues las filas
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Nota');
        data.addColumn('number', 'Numero de alumnos');
        data.addRows([
          ['Kcal', this.kcal],
          ['hdc', this.hdc],
          ['grasas',this.grasas],
          ['proteinas',this.proteinas],
          ['fibra',this.fibra]
        ]);
      
        // poner las opciones de la grafica
        var options = {'title':this.alimento,
                       'width':500,
                       'height':500,
                      'is3D':true};
        // Instantiate and draw our chart, passing in some options.
        //aqui creamos el objeto grafico, se le pasa como parametro un elemento del html
        var chart = new google.visualization.PieChart(this.elemento);
        //devuelve el grafico
        return chart.draw(data, options);

      }
}
//esto es simplemente una prueba para comprobar como se haria si lo pusieramos como un metodo dentro de un objeto, es muuuy util.
let patata=new Chart('patata',500,500,30,70,70,document.getElementById('chart_div'));
let pollo=new Chart('patata',500,500,30,70,70,document.getElementById('chart_div2'));
document.getElementById('boton').addEventListener('click',function(){patata.drawChart()});
document.getElementById('boton').addEventListener('click',function(){pollo.drawChart()});
//document.getElementById('boton').addEventListener('click',function(){drawChart(2,2)});