//pegando os seletores
let entradaWatt = document.getElementById('entradaWatt');
let resultadoWatt = document.getElementById('resultadoWatt');
let select1Watt = document.getElementById('select1Watt');
let select2Watt = document.getElementById('select2Watt');
let select1ValorWatt,select2ValorWatt;


entradaWatt.addEventListener("keyup" ,converter)
select1Watt.addEventListener("change" ,converter)
select2Watt.addEventListener("change" ,converter)

select1ValorWatt = select1Watt.value
select2ValorWatt = select2Watt.value


function converter() {
    select1ValorWatt = select1Watt.value
    select2ValorWatt = select2Watt.value
   
    
    //Wh

    if(select1ValorWatt === "Wh"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1

    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000
    
    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.001

    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000001

    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000000001
    
    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600

    }else if(select1ValorWatt === "Wh" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3.6
    }

    //mWh

    if(select1ValorWatt === "mWh"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.001

    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1
    
    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000001

    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000000001

    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000000000001
    
    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3.6

    }else if(select1ValorWatt === "mWh" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.0036
    }

    //kWh

    if(select1ValorWatt === "kWh"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000

    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000
    
    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1

    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.001

    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.000001
    
    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600000

    }else if(select1ValorWatt === "kWh" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600
    }

    //MWh

    if(select1ValorWatt === "MWh"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000

    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000000
    
    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000

    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1

    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.001
    
    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600000000

    }else if(select1ValorWatt === "MWh" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600000
    }

    //GWh

    if(select1ValorWatt === "GWh"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000000

    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000000000
    
    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000000

    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000

    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1
    
    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600000000000

    }else if(select1ValorWatt === "GWh" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 3600000000
    }

    //J

    if(select1ValorWatt === "J"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.0002777777777777778

    }else if(select1ValorWatt === "J" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.2777777777777778
    
    }else if(select1ValorWatt === "J" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 2.7777777777777776e-7

    }else if(select1ValorWatt === "J" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 2.7777777777777777e-10

    }else if(select1ValorWatt === "J" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 2.777777777777778e-13

    }else if(select1ValorWatt === "J" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1

    }else if(select1ValorWatt === "J" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.001
    }

    //kJ

    if(select1ValorWatt === "kJ"  && select2ValorWatt === "Wh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.2777777777777778

    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "mWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 277.77777777777777
    
    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "kWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 0.0002777777777777778

    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "MWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 2.7777777777777776e-7

    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "GWh") {
        resultadoWatt.innerHTML =  entradaWatt.value * 2.7777777777777777e-10
    
    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "J") {
        resultadoWatt.innerHTML =  entradaWatt.value * 1000

    }else if(select1ValorWatt === "kJ" && select2ValorWatt === "kJ") {
        resultadoWatt.innerHTML =  entradaWatt.value * 01
    }
}