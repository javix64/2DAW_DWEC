function ejercicio2(arrayFechas,fechaInicio,fechaFin){
    let arrDate=[];
    let dateStart=new Date(fechaInicio);
    let dateEnd=new Date(fechaFin);
    for (let i = 0; i < arrayFechas.length; i++){
        let fecha=new Date(arrayFechas[i]);
        
        if (fecha>dateStart && fecha<dateEnd){
            arrDate.push(fecha);
        }
    }
    return arrDate;
}
let a=ejercicio2(["01/01/1990","07/04/1991","01/03/2016","02/03/2016"],"01/01/2015","05/05/2017");
console.log(a);