/*function cotizar(){
    window.location.href = 'contacto.html';

}
var serviciosEscogidos = [];

function agregarServicio(servicio, boton){
    

    serviciosEscogidos.push(servicio)

    console.log(serviciosEscogidos);

    boton.style.display = 'none';

    boton.nextElementSibling.style.display = 'block';

}

function removerServicio(servicio, boton){

    var indice = serviciosEscogidos.indexOf(servicio);
    
    if (indice !== -1) {
    serviciosEscogidos.splice(indice, 1);
    }

    console.log(serviciosEscogidos);


    boton.style.display = 'none';

    boton.previousElementSibling.style.display = 'block';

    
}*/






console.log("Ejecutando el sistema")
function cotizar(){
    window.location.href = 'contacto.html';

}
var serviciosEscogidos = [];


function agregarServicio(servicio, boton){


    serviciosEscogidos.push(servicio)

    console.log(serviciosEscogidos);

    boton.style.display = 'none';

    boton.nextElementSibling.style.display = 'block';

}

function removerServicio(servicio, boton){

    var indice = serviciosEscogidos.indexOf(servicio);

    if (indice !== -1) {
    serviciosEscogidos.splice(indice, 1);
    }

    console.log(serviciosEscogidos);


    boton.style.display = 'none';

    boton.previousElementSibling.style.display = 'block';


}