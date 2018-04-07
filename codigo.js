//Obtener los ID's de los inputs en el HTML
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
var botonLimpiar = document.getElementById("clean");

//Asignarles tareas a los botones.
botonCalcular.addEventListener("click", dimelosdatos);
botonLimpiar.addEventListener("click", limpiar);
LFTAguinaldo.addEventListener("click", rellenarlfta);
LFTVacaciones.addEventListener("click", rellenarlftv);
LFTPrimaV.addEventListener("click", rellenarlftpv);


function limpiar()
{
    location.reload();
}

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
    
    if(aTrabajadosNum, dTrabajadosNum, sbasemens, diasdeAguinaldo, diasVacaciones, primaVacacionalNum > 0) //
{
    
    //CALCULOS
    var salarioMinimo = 88.36;
    var salarioDiario = (sbasemens / 30);
    var antiguedadDias = (aTrabajadosNum * 365) + dTrabajadosNum;
    var aguinaldo;
    var vacaciones1;
    var primaVacacionalF;
    var salarioNoMenorAlDoble;
    var primaDeAntiguedadF;
    
    if (salarioDiario >= salarioMinimo) //Si el trabajador gana conforme a la ley.
        {
    //Para la prima de antiguedad, tenemos que tomar un Salario Diario no mayor a dos salarios mínimos.
    if (salarioDiario > (salarioMinimo*2))//Si el salario diario excede el doble del salario mínimo
        {
            var salarioNoMenorAlDoble = salarioMinimo*2;
        }
    else if (salarioDiario < (salarioMinimo*2) && salarioDiario > (salarioMinimo))
             {
                var salarioNoMenorAlDoble = salarioDiario;
             }
    
    //Las prestaciones varían si trabajó más de un año o no.
    if (aTrabajadosNum >= 1) // Si laboró más de un año.
        {
            var aguinaldo = (salarioDiario*diasdeAguinaldo);
            var vacaciones1 = salarioDiario*diasVacaciones;
            var primaVacacionalF = vacaciones1*0.20;
            var primaDeAntiguedadF = ((salarioNoMenorAlDoble*12)*aTrabajadosNum)+((((salarioNoMenorAlDoble*12)*aTrabajadosNum)/365)*dTrabajadosNum);
            
            var resmos = document.getElementById("result");
    resmos.innerHTML = "La <strong>antiguedad del trabajador en días</strong> es <strong>" + antiguedadDias + " días</strong>.</br><hr>" + "Este trabajador ha laborado " + aTrabajadosNum + " años, con " + dTrabajadosNum + " días.<br/><hr>Su <strong>sueldo base mensual</strong> es de <strong>$" + sbasemens + "</strong>.<br/><hr> Le corresponden <strong>" + diasdeAguinaldo + " días de aguinaldo</strong>" + ", <strong>" + diasVacaciones + " días de vacaciones</strong> y una <strong>prima vacacional del " + primaVacacionalNum + "%</strong><br/><hr>Su <strong>salario diario</strong> es de <strong>$" + salarioDiario + "</strong> (redondeado a <strong>$" + Math.ceil(salarioDiario) + "</strong>). <br/><hr>Su <strong>aguinaldo</strong> equivale a <strong>$" + aguinaldo  + "</strong> (redondeado a <strong>$" + Math.ceil(aguinaldo) + "</strong>).<br/><hr>Durante sus " + diasVacaciones + " días de vacaciones, el trabajador recibirá en total <strong>$" + vacaciones1 + "</strong> (redondeado a <strong>$" + Math.ceil(vacaciones1) + "</strong>).<br/><hr>El trabajador gozará de una <strong>prima vacacional</strong> equivalente a <strong>$" + primaVacacionalF + " </strong>(redondeado a <strong>$" + Math.ceil(primaVacacionalF) + "</strong>).<br/><hr>La <strong>prima de antiguedad</strong> que le corresponde, es de <strong>$" + primaDeAntiguedadF + "</strong> (redondeado a <strong>$" + Math.ceil(primaDeAntiguedadF) + "</strong>).";
        }
    else if (aTrabajadosNum == 0) //Si no laboró un año entero.
        {
            var aguinaldo = ((salarioDiario*diasdeAguinaldo)/365)*dTrabajadosNum;
            var vaciones1 = 0; //No tiene derecho a vacaciones.
            var primaVacacionalF= 0; //Por ende tampoco a prima vacacional.
            var primaDeAntiguedadF = (((salarioNoMenorAlDoble*12)/365)*dTrabajadosNum);
            
                
    var resmos = document.getElementById("result");
    resmos.innerHTML = "La <strong>antiguedad del trabajador en días</strong> es <strong>" + antiguedadDias + " días</strong>.</br><hr>" + "Este trabajador no ha laborado ningún año, y ha laborado " + dTrabajadosNum + " días.<br/><hr>Su <strong>sueldo base mensual</strong> es de <strong>$" + sbasemens + "</strong>.<br/><hr> Le corresponden <strong>" + diasdeAguinaldo + " días de aguinaldo</strong>" + ", <strong>" + diasVacaciones + " días de vacaciones</strong> y una <strong>prima vacacional del " + primaVacacionalNum + "%</strong><br/><hr>Su <strong>salario diario</strong> es de <strong>$" + salarioDiario + "</strong> (redondeado a <strong>$" + Math.ceil(salarioDiario) + "</strong>). <br/><hr>Su <strong>aguinaldo</strong> equivale a <strong>$" + aguinaldo  + "</strong> (redondeado a <strong>$" + Math.ceil(aguinaldo) + "</strong>).<br/><hr>Este trabajador <strong>aún no tiene derecho a vacaciones</strong>, puesto que aún no cumple un año laborando en la empresa.<br/><hr>Por ende <strong>tampoco goza de prima vacacional</strong>.<br/><hr>La <strong>prima de antiguedad</strong> que le corresponde, es de <strong>$" + primaDeAntiguedadF + "</strong> (redondeado a <strong>$" + Math.ceil(primaDeAntiguedadF) + "</strong>).";
        }

}
    else //Si el trabajador no gana conforme a la ley.
    {
        alert("ALERTA: USTED ESTÁ EXPLOTANDO A SU TRABAJADOR.\nEstá pagándole $" + Math.ceil(salarioDiario) + " al día, y la ley establece que el salario mínimo es de $" + salarioMinimo + ". Debería estar avergonzado.");
        var resmos2 = document.getElementById("resultexplotador");
        resmos2.innerHTML = "¡MALDITO SOBREEXPLOTADOR!";
    }
}
    else
    {
        alert("Te faltó llenar algún campo. Por favor verifica que hayas llenado todos los campos y vuelve a intentarlo.")
    }
}

