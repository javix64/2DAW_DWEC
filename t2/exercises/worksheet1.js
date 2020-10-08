function exercise1(){
    var time = new Date();
    const time_Date = time.getDate();
    const time_Month = time.getMonth();
    const time_Day = time.getDay();
    const time_Hour = time.getHours();
    const time_Min = time.getMinutes();
    const time_Sec = time.getSeconds();

    document.getElementById('exercise1').append('Date: '+time_Date+' month: '+time_Month+' day: '+time_Day+' hour: '+time_Hour+' min: '+time_Min+' sec: '+time_Sec);

}

function exercise2(){
    var fechaHoy = new Date();
    var fecha85 = new Date();
    var fecha187 = new Date();
    var fechaResto = new Date();
    fecha85.setDate(fecha85.getDate()+85);
    fecha187.setDate(fecha187.getDate()-187);
    console.log('Hoy '+fechaHoy);
    console.log('Fecha85 '+fecha85);
    console.log('Fecha187 '+fecha187);
    fecha85.setFullYear(fecha85.getFullYear()+2);
    console.log('Fecha85 '+fecha85)
    fecha187.setHours(fecha187.getHours()-24);
    console.log('Fecha187 '+fecha187);
    fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
    console.log('Fecharesto: '+fechaResto);
}

function exercise3(){
    var cont=60;
    function printCount(){
        console.log(cont);
        cont--;
        if(!cont>=0){
            setTimeout(printCount, 1000);
        }
    }
    setTimeout(printCount,1000);
}

function exercise4(){
    //NI IDEA DE COMO HACER ESTE
    // POR QUE ESO DE !CONT>=0 ??????
    var cont=3;
    function printCount(){
        console.log(cont);
        cont--;
        if(!cont>=0){
            setTimeout(printCount, 1000);
        }
    }
    setTimeout(printCount,1000);
}

function exercise5(){
    var time= new Date();
    var right_Now=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    console.log(right_Now);
    setTimeout(exercise5,1000);
}