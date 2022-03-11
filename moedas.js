//pegando os seletores
let entradaMoedas = document.getElementById('entradaMoedas');
let resultadoMoedas = document.getElementById('resultadoMoedas');
let select1Moedas = document.getElementById('select1Moedas');
let select2Moedas = document.getElementById('select2Moedas');
let select1ValorMoedas,select2ValorMoedas;


entradaMoedas.addEventListener("keyup" ,converter)
select1Moedas.addEventListener("change" ,converter)
select2Moedas.addEventListener("change" ,converter)

select1ValorMoedas = select1Moedas.value
select2ValorMoedas = select2Moedas.value


function converter() {
    select1ValorMoedas = select1Moedas.value
    select2ValorMoedas = select2Moedas.value
   
    
    //C

    if(select1ValorMoedas === "C"  && select2ValorMoedas === "C") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 1

    }else if(select1ValorMoedas === "C" && select2ValorMoedas === "K") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 274.15
    
    }else if(select1ValorMoedas === "C" && select2ValorMoedas === "F") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 33.8

    }else if(select1ValorMoedas === "C" && select2ValorMoedas === "R") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 493.47
    }

    //K

    if(select1ValorMoedas === "K"  && select2ValorMoedas === "C") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * -272.15

    }else if(select1ValorMoedas === "K" && select2ValorMoedas === "K") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 1
    
    }else if(select1ValorMoedas === "K" && select2ValorMoedas === "F") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * -457.86999999999995

    }else if(select1ValorMoedas === "K" && select2ValorMoedas === "R") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 1.8000000000000682
    }

    //F

    if(select1ValorMoedas === "F"  && select2ValorMoedas === "C") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * -17.22222222222222

    }else if(select1ValorMoedas === "F" && select2ValorMoedas === "K") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 255.92777777777775
    
    }else if(select1ValorMoedas === "F" && select2ValorMoedas === "F") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 1

    }else if(select1ValorMoedas === "F" && select2ValorMoedas === "R") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 460.67
    }

    //R

    if(select1ValorMoedas === "R"  && select2ValorMoedas === "C") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * -272.5944444444445

    }else if(select1ValorMoedas === "R" && select2ValorMoedas === "K") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 255.92777777777775
    
    }else if(select1ValorMoedas === "R" && select2ValorMoedas === "F") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * -458.67

    }else if(select1ValorMoedas === "R" && select2ValorMoedas === "R") {
        resultadoMoedas.innerHTML =  entradaMoedas.value * 1
    }
}