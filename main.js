function redirigir(urlIngresada) {
    window.location.href = urlIngresada
}

function probarVariable(){
    var texto = "aca estaria el coontenico del machete";
    
    var numeros1 = 100;
    var numeroComoTexto = "1df00";
    var OTROtEXTO = "HOLA ";


    var numeros2 = 200;
    var resultadoSuma = numeros1 + numeros2 + 10;
    var variableBooleana = true;

    console.log(window.location.href)



    

}

function realizarBusqueda(){

    var inputBusqueda = document.getElementById("input-busqueda")
    var textoBuscar = inputBusqueda.value.replace(" ","+");
    var url = "https://www.jw.org/es/b%C3%BAsquedas/?q=" + textoBuscar
    window.location.href = url

}






