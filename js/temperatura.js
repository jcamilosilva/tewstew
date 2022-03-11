//pegando os seletores
let entradaTemperatura = document.getElementById('entradaTemperatura');
let resultadoTemperatura = document.getElementById('resultadoTemperatura');
let select1Temperatura = document.getElementById('select1Temperatura');
let select2Temperatura = document.getElementById('select2Temperatura');
let select1ValorTemperatura,select2ValorTemperatura;


entradaTemperatura.addEventListener("keyup" ,converter)
select1Temperatura.addEventListener("change" ,converter)
select2Temperatura.addEventListener("change" ,converter)

select1ValorTemperatura = select1Temperatura.value
select2ValorTemperatura = select2Temperatura.value


function converter() {
    select1ValorTemperatura = select1Temperatura.value
    select2ValorTemperatura = select2Temperatura.value
   
    
    //C

    if(select1ValorTemperatura === "C"  && select2ValorTemperatura === "C") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 1

    }else if(select1ValorTemperatura === "C" && select2ValorTemperatura === "K") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 274.15
    
    }else if(select1ValorTemperatura === "C" && select2ValorTemperatura === "F") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 33.8

    }else if(select1ValorTemperatura === "C" && select2ValorTemperatura === "R") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 493.47
    }

    //K

    if(select1ValorTemperatura === "K"  && select2ValorTemperatura === "C") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * -272.15

    }else if(select1ValorTemperatura === "K" && select2ValorTemperatura === "K") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 1
    
    }else if(select1ValorTemperatura === "K" && select2ValorTemperatura === "F") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * -457.86999999999995

    }else if(select1ValorTemperatura === "K" && select2ValorTemperatura === "R") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 1.8000000000000682
    }

    //F

    if(select1ValorTemperatura === "F"  && select2ValorTemperatura === "C") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * -17.22222222222222

    }else if(select1ValorTemperatura === "F" && select2ValorTemperatura === "K") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 255.92777777777775
    
    }else if(select1ValorTemperatura === "F" && select2ValorTemperatura === "F") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 1

    }else if(select1ValorTemperatura === "F" && select2ValorTemperatura === "R") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 460.67
    }

    //R

    if(select1ValorTemperatura === "R"  && select2ValorTemperatura === "C") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * -272.5944444444445

    }else if(select1ValorTemperatura === "R" && select2ValorTemperatura === "K") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 255.92777777777775
    
    }else if(select1ValorTemperatura === "R" && select2ValorTemperatura === "F") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * -458.67

    }else if(select1ValorTemperatura === "R" && select2ValorTemperatura === "R") {
        resultadoTemperatura.innerHTML =  entradaTemperatura.value * 1
    }
}