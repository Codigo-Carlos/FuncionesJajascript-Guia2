var boton1 = document.getElementById("BTN1");
var boton2 = document.getElementById("BTN2");
var boton4 = document.getElementById("BTN3");



boton1.addEventListener("click", function (){
    var caja1 = document.getElementById("C1");
    var nombre = document.getElementById("NOM1");
    var respuesta = document.getElementById("RES1");
    var ciudad = document.getElementById("CIU1");
    var estado = document.getElementsByName("RAD1")
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
        error += "Seleccione estado civil";
        
    }
    


    if (error == "") {
        respuesta.innerHTML = "Usted es " + nombre.value + "<br>Vive en "+ ciudad.options[ciudad.selectedIndex].text + "<br>Y se encuentra " + estado[marca].id;
        caja1.style.backgroundColor = "lightgreen";
    } else {
        respuesta.innerHTML = error + " <br>";
        caja1.style.backgroundColor = "lightcoral";
    }

})
boton2.addEventListener("click", function (){
    var caja2 = document.getElementById("C2");
    var precio = document.getElementById("PRE2");
    var descuento = document.getElementById("DES2");
    var respuesta = document.getElementById("RES2");

    if (isNaN(parseInt(precio.value))) {
        respuesta.innerHTML = "El precio debe ser en numeros";
        caja2.style.backgroundColor = "lightcoral";
    } else {
        if (parseInt(precio.value) > 0) {
            if ((parseInt(descuento.value) > 0)) {
                var por = parseInt(descuento.value)*0.01;
                var des = parseInt(precio.value) * por;
                var tot = parseInt(precio.value) - des;
                respuesta.innerHTML = "Se ha aplicado un descuento de $"+ des + "<br>Total a pagar = $"+ tot;
                caja2.style.backgroundColor = "lightblue";
            } else {
                caja2.style.backgroundColor = "lightblue";
                respuesta.innerHTML = "No se ha aplicado descuento <br>Total a pagar = $" + precio.value;;
            }      
        } else {
            caja2.style.backgroundColor = "lightcoral";
            respuesta.innerHTML = "El precio debe ser mayor a cero";
        }
        
    }
    
})
boton4.addEventListener("click", function (){
    var caja4 = document.getElementById("C4")
    var nota1 = document.getElementById("NOA3");
    var nota2 = document.getElementById("NOB3");
    var nota3 = document.getElementById("NOC3");
    var respuesta = document.getElementById("RES3");
    var prom = 0, error = "";

    if (isNaN(parseInt(nota1.value))) {
        error += "El nota 1 debe ser en numeros";
    } else {
        if (parseInt(nota1.value) >= 1 && parseInt(nota1.value) <= 7) {
        } else {
            error += "La nota 1 debe ser entre 1 y 7";
        }
    }
    if (isNaN(parseInt(nota2.value))) {
        error += "<br>El nota 2 debe ser en numeros";
    } else {
        if (parseInt(nota2.value) >= 1 && parseInt(nota2.value) <= 7) {
        } else {
            error += "<br>La nota 2 debe ser entre 1 y 7";
        }
    }
    if (isNaN(parseInt(nota3.value))) {
        error += "<br>El nota 3 debe  ser en numeros";
    } else {
        if (parseInt(nota3.value) >= 1 && parseInt(nota3.value) <= 7) {
        } else {
            error += "<br>La nota 3 debe ser entre 1 y 7";
        }
    }
    if (error == ""){
        caja4.style.backgroundColor = "lightseagreen";
        var tot = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)
        var prom = tot/3;
        respuesta.innerHTML = "El promedio es "+ prom;
    } else {
        caja4.style.backgroundColor = "lightcoral";
        respuesta.innerHTML = error;
    }
    
    
    
})