var aTrabajados = document.getElementById("a_Trabajados");
var diasTrabajados = document.getElementById("diasTrabajados");
var sueldoMensual = document.getElementById("sbm");
var diasAguinaldo = document.getElementById("diasAguinaldo");
var vacaciones = document.getElementById("vacaciones");
var primaVacacional = document.getElementById("primaVacacional");
var LFTAguinaldo = document.getElementById("lftaguinaldo");
var botonCalcular = document.getElementById("calculo");
botonCalcular.addEventListener("click", dimelosdatos);
LFTAguinaldo.addEventListener("click", rellenarlfta);

function rellenarlfta ()
{
    alert("La Ley Federal del Trabajo establece que los trabajadores tienen derecho a 15 días de aguinaldo.");
}

function dimelosdatos()
{
    
    var aTrabajadosNum = parseInt(aTrabajados.value);
    var dTrabajadosNum = parseInt(diasTrabajados.value);
    var sbasemens = parseInt(sueldoMensual.value);
    var diasdeAguinaldo = parseInt(diasAguinaldo.value);
    var diasVacaciones = parseInt(vacaciones.value);
    var primaVacacionalNum = parseInt(primaVacacional.value);
    if (aTrabajadosNum > 0) {
        
        alert("Este trabajador ha laborado " + aTrabajadosNum + " años, con " + dTrabajadosNum + " días.\nSu sueldo base mensual es de $" + sbasemens + ". Le corresponden " + diasdeAguinaldo + " días de aguinaldo" + ", " + diasVacaciones + " días de vacaciones y una prima vacacional del " + primaVacacionalNum + "%");
        console.log(aTrabajadosNum);
    }
    else {
        alert("Este trabajador aún no ha laborado un año o dejaste el campo en blanco.");
        console.log(aTrabajadosNum);
    }
    
    var antiguedadDias = (aTrabajadosNum * 365) + dTrabajadosNum;
    var resmos = document.getElementById("result");
    resmos.innerHTML = "La antiguedad del trabajador en días es " + antiguedadDias + " días.";
}

