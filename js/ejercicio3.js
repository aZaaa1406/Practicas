function validar(formulario){
    event.preventDefault();

    var abcOK = "0123456789";
    var checkStr = formulario.monto.value;
    var allValido = true;
    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
                }
            }
        if(j == abcOK.length){
            allValido=false;
            break;
        }
    }
    if(!allValido){
        alert("escriba unicamente numeros en el apartado de monto")
        formulario.nombre.focus();
        return false;
    }
    console.log("validado");
    
    if(allValido == true){
        calculo();
    }
}
function calculo(){
    let montoF = 0,
    mont = parseFloat(document.forms["formulario"]["monto"].value),
    mostrar = document.getElementById("resultado");

    montoF = parseFloat(mont * 0.85);

    mostrar.textContent = "El monto final de su compra es: "+montoF;
}
function limpiar(){
    document.getElementById("resultado").textContent = "";
}