var boton1 = document.getElementById("BTN1")
var caja1 = document.getElementById("C1");


boton1.addEventListener("click", function (){
    var nombre = document.getElementById("NOM1");
    var respuesta = document.getElementById("RES1");
    var ciudad = document.getElementById("CIU1");
    var estado = document.getElementsByName("RAD1")
    var xd = document.getElementById("C");
    var error = "";
    if (nombre.value == ""){
        error += "Ingrese nombre <br>";
    }
    if (ciudad.value == "") {
        error += "Ciudad no seleccionada <br>";
    }
    var i;
    var marca = null;
    for (i = 0; i < estado.length; i++) {
        if (estado[i].checked == true){
            var marca = i
        }
    }
    if (marca == null) {
        error += "seleccione estado civil";
    }
    


    if (error == "") {
        respuesta.innerHTML = "Usted es " + nombre.value + "<br>Vive en "+ ciudad.options[ciudad.selectedIndex].text + "<br>Y se encuentra " + estado[marca].id;
        caja1.style.backgroundColor = "lightgreen";
    } else {
        respuesta.innerHTML = error + " <br>";
        caja1.style.backgroundColor = "lightcoral";
    }

})