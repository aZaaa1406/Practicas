function validar(formulario){

    event.preventDefault();

    let abcOK = "1234567890",
        checkVal = formulario.capital.value,
        allValido = true;

    for(let i = 0; i < checkVal.length; i++){
        var caracteres = checkVal.charAt(i);
        var valido = false;
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres === abcOK.charAt(j)){
                valido = true;
                break;
            }
        }
        if(!valido){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Ingresa solo números");
        formulario.capital.focus();
        return false;
    }

    let porcentaje = parseFloat(checkVal) * 0.02,
        res = parseFloat(checkVal) + porcentaje,
        mostrar = document.getElementById("resultado");

    mostrar.textContent = res;

    return false; // Esto evita que el formulario se envíe
}
function limpiar() {
    document.getElementById("resultado").textContent = ""; // Limpiar el contenido del h1
}
    