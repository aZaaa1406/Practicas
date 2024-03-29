/*
javascript es un lenguaje de programacion mulñtidiagrama

acepta programnacin funcional, estructural, poo, eventos

dentro de js no existen int, double, float, string, stc

para el manejo de variables con tipo de dato existe el standar

mscript 6 el caul nos dice quepara el manejo de variables tenemos: 

VAR     LET    CONST


*/

//vamos a hacer una funcion para comprobar que en el campo nombre sea mayor a 3 caracteres

function validar(formulario){
    
    if(formulario.nombre.value.length < 4 ){
        alert("porfavor escribe 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var checkStr = formulario.nombre.value;
    var allValido = true;

    //vamos a ahcer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez tenga cada caracter debo de comparlo con la caden
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
        alert("escriba unicamente numeros en el apartado de edad")
        formulario.nombre.focus();
        return false;
    }
    var abcOK = "0123456789";
    var checkStr = formulario.edad.value;
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
        alert("escriba unicamente letras en el apartado de nombre")
        formulario.nombre.focus();
        return false;
    }
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt = formulario.correo.value;
    alert("email " + (b.test(txt)?" ":" no ")+"valido");
    return b.test;
}