function exercise410() {
    for (let i = 1; i < 7; i++) {
        document.write('<h'+i+'> Cabecera h'+i+'</h'+i+'>');
    }
}
function exercise411() {
    var columns=parseInt(prompt("Insert number of columns"))
    var height =parseInt(prompt("Insert height"))
    var width =parseInt(prompt("Insert width"))
    var div411 = document.getElementById('exercise411');
    var table = document.createElement('table');
    table.setAttribute('id','tabla');
    table.setAttribute("border", 1);
    div411.append(table);
    var tr = document.createElement('tr');
    table.append(tr)
    var td;
    for (let i = 0; i < columns; i++) {
        td= document.createElement('td');
        tr.append(td);
        td.setAttribute('height',height);
        td.setAttribute('width',width);
        td.append('*');
    }
}

function exercise412(){
    var columns=parseInt(prompt("Insert number of columns"))
    var height =parseInt(prompt("Insert height"))
    var width =parseInt(prompt("Insert width"))
    var div411 = document.getElementById('exercise412');
    var table = document.createElement('table');
    table.setAttribute('id','tabla');
    table.setAttribute('border', 1);
    div411.append(table);
    var tr = document.createElement('tr');
    table.append(tr)
    var td;
    for (let i = 0; i < columns; i++) {
        td= document.createElement('td');
        td.setAttribute('height',height);
        td.setAttribute('width',width);
        td.append('*');
        if (i%2){
            td.setAttribute("bgcolor","white");
        }else{
            td.setAttribute("bgcolor","black");
        }
        tr.append(td);
    }
}