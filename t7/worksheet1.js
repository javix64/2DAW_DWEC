//5,8
/*
exercise 5
 Selecciona el primer elemento de la primera lista y oculta dicho elemento.
*/
$('ol > li:eq(0)').hide();

/*
exercise 8
8. Crea una web simulando una serie de noticias (3 divs con el texto de la noticia y sobre cada uno su título correspondiente). 
Mediante JQuery
a)Cambia el tamaño de fuente de las noticias (3 tamaños).
b)Al pulsar sobre cada título se debe mostrar u ocultar ésta.
c)Al colocar el ratón sobre el texto de la noticia debe cambiar el color de fondo de ésta.

d)Completa el apartado c) haciendo que al salir el ratón se vuelva a su color original elfondo
*/
//A
$('div > p:eq(0)').css("font-size",10);
$('div > p:eq(1)').css("font-size",20);
$('div > p:eq(2)').css("font-size",30);
//B. I don't know how to show it.
$('h2:eq(0)').click(function () { 
    $('h2:eq(0)').hide(); 
});
$('h2:eq(1)').click(function () { 
    $('h2:eq(1)').hide(); 
});
$('h2:eq(2)').click(function () { 
    $('h2:eq(2)').hide(); 
});
//C y D
for (let i = 0; i < 3; i++) {
    $(`div > p:eq(${i})`).hover(function(){
        $(`div > p:eq(${i})`).css('background-color','red');
    });
    $(`div > p:eq(${i})`).mouseout(function(){
        $(`div > p:eq(${i})`).css('background-color','inherit');
    });
}
