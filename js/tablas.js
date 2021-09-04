
function inicio(){
    //Datos
    
    while(true){
        var numero = prompt("Ingrese el numero de la tabla que desea", "");
            if(!isNaN(numero) && numero != null && numero != ""){
                break;
            }else{
                alert("Ingrese un numero de tabla!");
                continue;
            }
        }
    while(true){
        var rango = prompt("Ingrese el rango","");
            if(!isNaN(rango) && rango != null && rango != ""){
                break;
            }else{
                alert("Ingrese un numero en el rango!");
                continue;
            } 
    }
    
   
    //Id del div donde se imprimira HTML
    var tablas = document.getElementById("tablas");
    var resultado;
    

    var estructura = "<header>";
    estructura += "<h1> Tablas de multiplicar de "+ numero +"</h1>\n";
    estructura += "</header>\n";
    
    for(var i = 1; i<=rango; i++){
        resultado= numero * i;
        estructura += "<p>"+ numero + " multiplicado por " + i + " es igual a: " + resultado+"</p>\n";
    }
    estructura += "<a href=\"calculoUnidades.html\">Ejercicio 1</a>"
    tablas.innerHTML = estructura;
}

window.onload(inicio());