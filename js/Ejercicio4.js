function validar(formulario){
    event.preventDefault();

    let inputs = document.querySelectorAll('input[type="number"]'),
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
    
function calculo() {
        //Calculo de calificaciones
        let par1 = parseFloat(document.forms["formulario"]["p1"].value),
            par2 = parseFloat(document.forms["formulario"]["p2"].value),
            par3 = parseFloat(document.forms["formulario"]["p3"].value),
            resPar = ((par1 + par2 + par3) * 10) / 55;
    
        //Calculo Examen
        let exa = parseFloat(document.forms["formulario"]["examen"].value),
            resEx = (exa * 30) / 100;
        //Calculo Trabajo Final
        let tf = parseFloat(document.forms["formulario"]["tf"].value), 
            resTb = (tf * 15) / 100;
        //Calculo
        let calFinal = resPar + resEx + resTb,
            calRedon = Math.round(calFinal);
    
        let mostrar = document.getElementById("resultado");
        mostrar.textContent = "Su calificacion final es: "+calRedon;
    }
    function limpiar() {
        document.getElementById("resultado").textContent = ""; // Limpiar el contenido del h1
    }
    