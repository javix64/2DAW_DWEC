//1,2,7,8,9,10
/*
1- Crea una tabla de 8 filas, a continuación pon el fondo rojo a todas aquellas que estén por encima de la tercera (2) y pon el fondo azul a todas aquellas que estén por debajo de la tercera(2) 
*/
//if i set a 8x8 table i have problem to color tr...
let table= document.createElement('table');
    const td=document.createElement('td');
    for (let j = 0; j < 8; j++) {
        const tr=document.createElement('tr');
        $(tr).text(j).appendTo(td);
    }
    $(table).append(td);
document.getElementById('exercise1').append(table);
for (let i = 0; i < 8; i++) {
    if(i<=2){
        $(`tr:eq(${i})`).css('background-color','blue');
    }else if(i>2){
        $(`tr:eq(${i})`).css('background-color','red');
    }
}
/*
2- Selecciona todos los párrafos de un documento que contengan “eu” y ponles un color de fondo rojo.
 */
$('div#exercise2 > p:contains("eu")').css('background-color','blue')
/*
7- Crea un documento en el que se produzcan 4 animaciones mediante un botón y mediante un segundo botón se elimine la cola de animaciones.
*/
$('button#play').click(function(){
    $('div#divi').animate({left:'250px'},2000);
    $('div#divi').animate({left:'100px'},2000);
    $('div#divi').animate({right:'250px'},2000);
    $('div#divi').animate({right:'100px'},2000);
})
$('button#stop').click(function(){
    $('div#divi').stop(true);
})
/*
8- Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados, establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente.
*/
$('button#divi1').click(function () { 
    $('div#div1').fadeIn('slow');
});
$('button#divi2').click(function () { 
    $('div#div2').fadeIn('fast');
});
$('button#divi3').click(function () { 
    $('div#div3').fadeIn(800);
});
$('button#divi4').click(function () { 
    $('div#div4').fadeIn(2000);
});
$('button#divi5').click(function () { 
    $('div#div5').fadeIn(4000);
});
/*
9-Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba.
*/
$('button#play9').click(function () { 
    $('div#e9').fadeIn(2000);
    $('div#e9').css('background-color','blue').animate({left:'200px'},2000);
    $('div#e9').animate({top:'200px'},2000).fadeOut('slow');
    
});
$('button#stop9').click(function(){
    $('div#e9').stop(true);
})
/*
10-Seguridad en una clave Crea un plugin que realice lo siguiente. Tendremos un formulario con un campo input password. Con jQuery mostraremos dinámicamente un mensaje al lado delcampo con la fortaleza de la clave que haya escrita. A medida que el usuario cambie el contenido del campo, se actualizará el mensaje del lado, mostrando la fortaleza de la nueva clave. (<5 no segura, >5 y <8 medianamente segura, >8 segura)
*/
$('input#password').keydown(function () { 
    if($('input#password').val().length<5){
        $('p#strong').text('No segura');
    }else if($('input#password').val().length>5 && $('input#password').val().length<8){
        $('p#strong').text('medianamente segura');
    }else if($('input#password').val().length>5){
        $('p#strong').text('segura')
    }
});