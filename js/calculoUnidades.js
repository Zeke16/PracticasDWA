//funciones

//manejador de eventos
function init(){
    //Ingresar los datos a convertir
    var operacion1 = prompt("Ingrese la cantidad de metros", "");

    var operaciones = document.getElementById("operaciones");

    var contenido = "<header>";
    contenido += "\t <h1> Calcular </h1> \n";
    contenido += "</header>\n";
        contenido += "<nav>";
            contenido += "\t<ul>\n";
                contenido += "\t<li>\n";
                    contenido += "\t<a href=\" javascript:void(0)\"><input type=\"button\" value=\" pies\"/></a>\n";
                contenido += "\t</li>\n";
            contenido += "</ul>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;

}


window.onload = init();