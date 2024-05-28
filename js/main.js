//El código va e inicia aquí ->
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let alertValidacionesTexto = document.getElementById("alertaValidacionesTexto");
let alertValidaciones = document.getElementById("alertaValidaciones");

function validadCantidad(){
    if(txtNumber.value.lenght==0){
        return false;
    } return true;
}// ValidadCantidades



btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";
    if(txtNombre.value.lenght<3){
        alertValidacionesTexto.innerHTML="El <strong>nombre<7strong> no es correcto";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium"; //Se supone que estamos validando, pero no nos sale nada.
    }//lenght
});
if(! validadCantidad()){
    alertValidacionesTexto.innerHTML+="El <strong>nombre<7strong> no es correcto";
    alertValidaciones.style.display="block";
    txtNombre.style.border="solid red medium"; //Se supone que estamos validando, pero no nos sale nada.
}//!validarCantidad

btnClear.addEventListener("click", function(event){
    event.preventDefault();
        alertValidacionesTexto.innerHTML="El <strong>nombre<7strong> no es correcto";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium"; //Se supone que estamos validando, pero no nos sale nada. Cuadro rojo

    txtNombre.value = "";
    txtNumber.value = "";

});
