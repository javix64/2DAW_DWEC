//para poner una key y value
localStorage.setItem('id_unica','value');
//para obtener una key:
localStorage.getItem('id_unica');
//la diferencia entre local y session
    //session-> unica por pestaña y se borra cuando se cierra la pestaña
    //local-> para guardar datos permanentemente en local
//guardamos una cadena json con json.stringify
//luego lo devolvemos en formato json con json.parse

//-------------------------------
//almacenar datos en local

//formato para almacenar objetos -> json
//como guardo cualquier objeto? json.stringify
//como leo cualquier objeto? json.parse