var aTrabajados = document.getElementById("a_Trabajados");
var diasTrabajados = document.getElementById("diasTrabajados");
var sueldoMensual = document.getElementById("sbm");
var diasAguinaldo = document.getElementById("diasAguinaldo");
var vacaciones = document.getElementById("vacaciones");
var primaVacacional = document.getElementById("primaVacacional");
var LFTAguinaldo = document.getElementById("lftaguinaldo");
var LFTVacaciones = document.getElementById("lftvacaciones");
var LFTPrimaV = document.getElementById("lftprimavacacional");
var botonCalcular = document.getElementById("calculo");
botonCalcular.addEventListener("click", dimelosdatos);
LFTAguinaldo.addEventListener("click", rellenarlfta);
LFTVacaciones.addEventListener("click", rellenarlftv);
LFTPrimaV.addEventListener("click", rellenarlftpv);

function rellenarlfta ()
{
    alert("La Ley Federal del Trabajo establece que los trabajadores tienen derecho a 15 días de aguinaldo.");
}

function rellenarlftv ()
{
    alert("La Ley Federal del Trabajo establece que los trabajadores tienen derecho a cierto número de vacaciones, dependiendo los años que lleven trabajando en la empresa:\nAño 1: 6 días \nAño 2: 8 días\nAño 3: 10 días\nAño 4: 12 días\nDe 5 a 9 años: 14 días\nDe 10 a 14 años: 16 días\nDe 15 a 19 años: 18 días\nDe 20 a 24 años: 20 días\nDe 25 a 29 años: 22 días\nDe 30 a 34 años: 24 días.");
}

function rellenarlftpv ()
{
    alert("La Ley Federal del Trabajo establece que el trabajador tendrá derecho a una prima no menor del 25% de lo que corresponda de ingresos durante el periodo de disfrute.");
}

function dimelosdatos()
{
    
    var aTrabajadosNum = parseInt(aTrabajados.value);
    var dTrabajadosNum = parseInt(diasTrabajados.value);
    var sbasemens = parseInt(sueldoMensual.value);
    var diasdeAguinaldo = parseInt(diasAguinaldo.value);
    var diasVacaciones = parseInt(vacaciones.value);
    var primaVacacionalNum = parseInt(primaVacacional.value);
    
    //calculos
    var salarioDiario = (sbasemens / 30);
    var antiguedadDias = (aTrabajadosNum * 365) + dTrabajadosNum;
    var aguinaldo = ((salarioDiario*30)/365)*225;
    var resmos = document.getElementById("result");
    resmos.innerHTML = "La antiguedad del trabajador en días es " + antiguedadDias + " días.</br>" + "Este trabajador ha laborado " + aTrabajadosNum + " años, con " + dTrabajadosNum + " días.<br/>Su sueldo base mensual es de $" + sbasemens + ".<br/> Le corresponden " + diasdeAguinaldo + " días de aguinaldo" + ", " + diasVacaciones + " días de vacaciones y una prima vacacional del " + primaVacacionalNum + "%<br/>Su salario diario es de $" + salarioDiario + " (redondeado a $" + Math.ceil(salarioDiario) + "). <br/> Su aguinaldo equivale a $" + aguinaldo  + " (redondeado a $" + Math.ceil(aguinaldo) + ").";
}

