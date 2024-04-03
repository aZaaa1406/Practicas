function validar(formulario){
    event.preventDefault();
    let abcOK = "1234567890",
    inputs = document.querySelectorAll('input [type="number"]');

    inputs.forEach(input => {
        let checkVal = input.value;
            let abcOK = "1234567890";
            
            for (let i = 0; i < checkVal.length; i++) {
                var caracteres = checkVal.charAt(i);
                var valido = false;
                for (var j = 0; j < abcOK.length; j++) {
                    if (caracteres === abcOK.charAt(j)) {
                        valido = true;
                        break;
                    }
                }
                if (!valido) {
                    allValido = false;
                    break;
                }
            }
    
            if (!allValido) {
                alert("Ingresa solo números");
                input.focus();
                return false;
            }
    });

    const hombres = parseInt(document.forms["formulario"]["hombres"].value),
    mujeres = parseInt(document.forms["formulario"]["mujeres"].value),
    total = parseInt(document.forms["formulario"]["total"].value);

    let suma = hombres + mujeres;

    if(suma === total){
        allValido = true;
    }else{
        alert("La suma de los hombres y mujeres no coincide con el numero total de alumnos");
    }
    if(allValido){
        calculo();
    }
}
function calculo(){
    const hombres = parseFloat(document.forms["formulario"]["hombres"].value),
    mujeres = parseFloat(document.forms["formulario"]["mujeres"].value),
    total = parseInt(document.forms["formulario"]["total"].value);

    let porcentajeH = Math.round((hombres * 100)/total), 
    porcentajeM = Math.round((mujeres * 100)/total),
    pHombres = document.getElementById("resultadoH"),
    pMujeres = document.getElementById("resultadoM");

    pHombres.textContent = "El porcentaje de hombres es: "+porcentajeH+"%";
    pMujeres.textContent = "El porcentaje de mujeres es: "+porcentajeM+"%";
}
function limpiar(){
    document.getElementById("resultadoH").textContent = "";
    document.getElementById("resultadoM").textContent = "";
}