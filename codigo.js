//Obtener los ID's de los inputs en el HTML
let aTrabajados = document.getElementById("a_Trabajados");
let diasTrabajados = document.getElementById("diasTrabajados");
let sueldoMensual = document.getElementById("sbm");
let diasAguinaldo = document.getElementById("diasAguinaldo");
let vacaciones = document.getElementById("vacaciones");
let primaVacacional = document.getElementById("primaVacacional");
let LFTAguinaldo = document.getElementById("lftaguinaldo");
let LFTVacaciones = document.getElementById("lftvacaciones");
let LFTPrimaV = document.getElementById("lftprimavacacional");
let botonCalcular = document.getElementById("calculo");
let botonLimpiar = document.getElementById("clean");


const clean = () => 
{
    location.reload();
}

const rellenarlfta = () =>
{
    alert('La Ley Federal del Trabajo establece que los trabajadores tienen derecho a 15 días de aguinaldo.');
}

const rellenarlftv = () =>
{
    alert('La Ley Federal del Trabajo establece que los trabajadores tienen derecho a cierto número de vacaciones, dependiendo los años que lleven trabajando en la empresa:\nAño 1: 6 días \nAño 2: 8 días\nAño 3: 10 días\nAño 4: 12 días\nDe 5 a 9 años: 14 días\nDe 10 a 14 años: 16 días\nDe 15 a 19 años: 18 días\nDe 20 a 24 años: 20 días\nDe 25 a 29 años: 22 días\nDe 30 a 34 años: 24 días.');
}

const rellenarlftpv = () =>
{
    alert('La Ley Federal del Trabajo establece que el trabajador tendrá derecho a una prima no menor del 25% de lo que corresponda de ingresos durante el periodo de disfrute.');
}

const showData = () =>
{
        let Show = document.querySelector('.showResults');


    Show.classList.add('now');
    if (Show.classList.contains('now')){ console.log('se activó');
    }
}

const tellMeTheData = () =>
{
    
    let aTrabajadosNum = parseInt(aTrabajados.value);
    let dTrabajadosNum = parseInt(diasTrabajados.value);
    let sbasemens = parseInt(sueldoMensual.value);
    let diasdeAguinaldo = parseInt(diasAguinaldo.value);
    let diasVacaciones = parseInt(vacaciones.value);
    let primaVacacionalNum = parseInt(primaVacacional.value);
    
    if(aTrabajadosNum, dTrabajadosNum, sbasemens, diasdeAguinaldo, diasVacaciones, primaVacacionalNum > 0)
    {
    
    //CALCULOS
    let salarioMinimo = 102.68;
    let salarioDiario = (sbasemens / 30);
    let antiguedadDias = (aTrabajadosNum * 365) + dTrabajadosNum;
    let aguinaldo;
    let vacaciones1;
    let primaVacacionalF;
    let salarioNoMenorAlDoble;
    let primaDeAntiguedadF;
    
    if (salarioDiario >= salarioMinimo) //Si el trabajador gana conforme a la ley.
        {
    //Para la prima de antiguedad, tenemos que tomar un salario diario no mayor a dos salarios mínimos.
    if (salarioDiario > (salarioMinimo*2)) //Si el salario diario excede el doble del salario mínimo
        {
            salarioNoMenorAlDoble = salarioMinimo*2;
        }
    else
             {
                salarioNoMenorAlDoble = salarioDiario;
             }
    
    //Las prestaciones varían si trabajó más de un año o no.
    if (aTrabajadosNum >= 1) // Si laboró más de un año.
        {
            aguinaldo = salarioDiario*diasdeAguinaldo;
            vacaciones1 = salarioDiario*diasVacaciones;
            primaVacacionalF = vacaciones1*0.20;
            primaDeAntiguedadF = ((salarioNoMenorAlDoble*12)*aTrabajadosNum)+((((salarioNoMenorAlDoble*12)*aTrabajadosNum)/365)*dTrabajadosNum);
            
            var resmos = document.getElementById("result");
                resmos.innerHTML = "La <strong>antiguedad del trabajador en días</strong> es <strong>" + antiguedadDias + " días</strong>.</br><hr>" + "Este trabajador ha laborado " + aTrabajadosNum + " años, con " + dTrabajadosNum + " días.<br/><hr>Su <strong>sueldo base mensual</strong> es de <strong>$" + sbasemens + "</strong>.<br/><hr> Le corresponden <strong>" + diasdeAguinaldo + " días de aguinaldo</strong>" + ", <strong>" + diasVacaciones + " días de vacaciones</strong> y una <strong>prima vacacional del " + primaVacacionalNum + "%</strong><br/><hr>Su <strong>salario diario</strong> es de <strong>$" + salarioDiario + "</strong> (redondeado a <strong>$" + Math.ceil(salarioDiario) + "</strong>). <br/><hr>Su <strong>aguinaldo</strong> equivale a <strong>$" + aguinaldo  + "</strong> (redondeado a <strong>$" + Math.ceil(aguinaldo) + "</strong>).<br/><hr>Durante sus " + diasVacaciones + " días de vacaciones, el trabajador recibirá en total <strong>$" + vacaciones1 + "</strong> (redondeado a <strong>$" + Math.ceil(vacaciones1) + "</strong>).<br/><hr>El trabajador gozará de una <strong>prima vacacional</strong> equivalente a <strong>$" + primaVacacionalF + " </strong>(redondeado a <strong>$" + Math.ceil(primaVacacionalF) + "</strong>).<br/><hr>La <strong>prima de antiguedad</strong> que le corresponde, es de <strong>$" + primaDeAntiguedadF + "</strong> (redondeado a <strong>$" + Math.ceil(primaDeAntiguedadF) + "</strong>).";
        }
    else if (aTrabajadosNum == 0) //Si no laboró un año entero.
        {
            aguinaldo = ((salarioDiario*diasdeAguinaldo)/365)*dTrabajadosNum;
            vaciones1 = 0; //No tiene derecho a vacaciones.
            primaVacacionalF= 0; //Por ende tampoco a prima vacacional.
            primaDeAntiguedadF = (((salarioNoMenorAlDoble*12)/365)*dTrabajadosNum);
            
                
    var resmos = document.getElementById("result");
            resmos.innerHTML = "La <strong>antiguedad del trabajador en días</strong> es <strong>" + antiguedadDias + " días</strong>.</br><hr>" + "Este trabajador no ha laborado ningún año, y ha laborado " + dTrabajadosNum + " días.<br/><hr>Su <strong>sueldo base mensual</strong> es de <strong>$" + sbasemens + "</strong>.<br/><hr> Le corresponden <strong>" + diasdeAguinaldo + " días de aguinaldo</strong>" + ", <strong>" + diasVacaciones + " días de vacaciones</strong> y una <strong>prima vacacional del " + primaVacacionalNum + "%</strong><br/><hr>Su <strong>salario diario</strong> es de <strong>$" + salarioDiario + "</strong> (redondeado a <strong>$" + Math.ceil(salarioDiario) + "</strong>). <br/><hr>Su <strong>aguinaldo</strong> equivale a <strong>$" + aguinaldo  + "</strong> (redondeado a <strong>$" + Math.ceil(aguinaldo) + "</strong>).<br/><hr>Este trabajador <strong>aún no tiene derecho a vacaciones</strong>, puesto que aún no cumple un año laborando en la empresa.<br/><hr>Por ende <strong>tampoco goza de prima vacacional</strong>.<br/><hr>La <strong>prima de antiguedad</strong> que le corresponde, es de <strong>$" + primaDeAntiguedadF + "</strong> (redondeado a <strong>$" + Math.ceil(primaDeAntiguedadF) + "</strong>).";
        }

}
    else //Si el trabajador no gana conforme a la ley.
    {
        alert(`ALERTA: USTED ESTÁ EXPLOTANDO A SU TRABAJADOR.\nEstá pagándole ${Math.ceil(salarioDiario)} al día, y la ley establece que el salario mínimo es de ${salarioMinimo}. Debería estar avergonzado.`);
        var ShowExp = document.querySelector('.resmos2');


    ShowExp.classList.add('now');
    if (ShowExp.classList.contains('now'))
    {
        console.log('se activó');
    }
        var resmos2 = document.getElementById("resultexplotador");
        resmos2.innerHTML = "EXPLOTACIÓN";
    }
    
    }
    else
    {
        alert("Te faltó llenar algún campo. Por favor verifica que hayas llenado todos los campos y vuelve a intentarlo.")
    }
}

//Asignarles tareas a los botones.
botonCalcular.addEventListener("click", tellMeTheData);
botonCalcular.addEventListener("click", showData);
botonLimpiar.addEventListener("click", clean);
LFTAguinaldo.addEventListener("click", rellenarlfta);
LFTVacaciones.addEventListener("click", rellenarlftv);
LFTPrimaV.addEventListener("click", rellenarlftpv);