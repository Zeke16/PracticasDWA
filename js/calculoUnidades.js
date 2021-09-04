//funciones

//manejador de eventos
function init(){
    //Ingresar los datos a convertir
    while(true){
        var operacion1 = prompt("Ingrese la cantidad de metros");
        if(!isNaN(operacion1) && operacion1 != null && operacion1 != ""){
            break;
        }else{
            alert("Ingrese un numero");
          continue;
        }
    }
    var operaciones = document.getElementById("operaciones");

        var contenido = "<header>";
        contenido += "\t <h1 class=\"titulo\"> Calcular </h1> \n";
        contenido += "</header>\n";
            contenido += "<nav>";
                contenido += "\t<ul>\n";
                    contenido += "\t<li>\n";
                        contenido += "\t\t<a href=\" javascript:void(0)\"><input type=\"button\" value=\" Pies\"/></a>\n";
                    contenido += "\t</li>\n";
                    contenido += "\t<li>\n";
                        contenido += "\t\t<a href=\" javascript:void(1)\"><input type=\"button\" value=\" Pulgadas\"/></a>\n";
                    contenido += "\t</li>\n";
                    contenido += "\t<li>\n";
                        contenido += "\t\t<a href=\" javascript:void(2)\"><input type=\"button\" value=\" Yardas\"/></a>\n";
                    contenido += "\t</li>\n";
                contenido += "</ul>\n";
            contenido += "</nav>\n";
            contenido += "<a href=\"tablasMultiplicacion.html\" class=\"a\">Ejercicio 2</a>"

        operaciones.innerHTML = contenido;
        var opciones = document.getElementsByTagName("a");

        for(var i = 0; i<opciones.length; i++){
        switch(i){
            case 0:
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\" letterpress\">" + operacion1 + " Metros son equivalentes a " +
                    (parseFloat(operacion1)) * parseFloat(3.281) + " Pies </p>\n";
                }
                break;

                case 1:
                opciones[i].onclick = function(){
                    var resultado = document.getElementById("resultado");
                    resultado.innerHTML = "<p class=\" letterpress\">" + operacion1 + " Metros son equivalentes a " +
                    (parseFloat(operacion1)) * parseFloat(39.3701) + " Pies </p>\n";
                }
                break;

                case 2:
                opciones[i].onclick = function(){
                    var resultado = document.getElementById("resultado");
                    resultado.innerHTML = "<p class=\" letterpress\">" + operacion1 + " Metros son equivalentes a " +
                    (parseFloat(operacion1)) * parseFloat(1.09361) + " Pies </p>\n";
                }
                break;
        }
            
        }

}
window.onload = init();