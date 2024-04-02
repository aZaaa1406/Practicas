function calculo(formulario){
    event.preventDefault();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const mostrar =document.getElementById("edad");
    //obtener fechas actuales
    const fechaActual = new Date();
    const añoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth() + 1);
    const diaActual = parseInt(fechaActual.getDate());
    
    //obtener datos de la fecha de nacimiento
    const añoNac = parseInt(fechaNacimiento.substring(0,4));
    const mesNac = parseInt(fechaNacimiento.substring(5,7));
    const diaNac = parseInt(fechaNacimiento.substring(8,10));
    console.log(añoNac);
    console.log(mesNac);
    console.log(diaNac);
    let edad = añoActual - añoNac;
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    mostrar.textContent = "Su edad es: "+edad+" años";
}
function limpiar(formulario){
    document.getElementById("edad").textContent = "";
}