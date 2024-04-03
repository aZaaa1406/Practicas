function validar(formulario){
    event.preventDefault();

    let abcOK = "1234567890",
    inputs = document.querySelectorAll('input[type="number"]')
    allValido = true;

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
    if(allValido == true){
        calculo();
    }

    return false;
}
function calculo(){
    const sueldoB = parseFloat(document.forms["formulario"]["sueldoB"].value),
    venta1 = parseFloat(document.forms["formulario"]["venta1"].value),
    venta2 = parseFloat(document.forms["formulario"]["venta2"].value),
    venta3 = parseFloat(document.forms["formulario"]["venta3"].value);
    console.log(sueldoB);
    let comisiones = 0, 
    sueldoTotal;

    mostrar = document.getElementById("resultado"),
    coms = document.getElementById("comisiones");

    comisiones = parseFloat((venta1 + venta2 + venta3) *0.1);
    sueldoTotal = parseFloat(sueldoB + comisiones);

    coms.textContent = "El porcentaje de sus comisiones es de: "+ comisiones;
    mostrar.textContent = "Su salario es de: " + sueldoTotal ;
}
function limpiar(){
    document.getElementById("comisiones").textContent = "";
    document.getElementById("resultado").textContent = ""; 
}