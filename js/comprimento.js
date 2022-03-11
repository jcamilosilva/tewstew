//pegando os seletores
let entradaComprimento = document.getElementById('entradaComprimento');
let resultadoComprimento = document.getElementById('resultadoComprimento');
let select1Comprimento = document.getElementById('select1Comprimento');
let select2Comprimento = document.getElementById('select2Comprimento');
let select1ValorComprimento,select2ValorComprimento;


entradaComprimento.addEventListener("keyup" ,converter)
select1Comprimento.addEventListener("change" ,converter)
select2Comprimento.addEventListener("change" ,converter)

select1ValorComprimento = select1Comprimento.value
select2ValorComprimento = select2Comprimento.value


function converter() {
    select1ValorComprimento = select1Comprimento.value
    select2ValorComprimento = select2Comprimento.value
   
    //mm

    if(select1ValorComprimento === "mm"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.1

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.001
    
    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.000001
        
    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.03937008

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0010936133333333334

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.003280833438333123

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.00328084

    }else if(select1ValorComprimento === "mm"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 6.213712
    }

    //cm
    
    if(select1ValorComprimento === "cm"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 10

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.01
    
    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.00001
        
    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.3937008

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.010936133333333334

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  enentradaComprimentotrada.value * 0.032808334383331236

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0328084

    }else if(select1ValorComprimento === "cm"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.000006213712121212121
    }

    //m

    if(select1ValorComprimento === "m"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1000

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 100

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1
    
    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.001
        
    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 39.37008

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1.0936133333333333

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3.280833438333123

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3.28084

    }else if(select1ValorComprimento === "m"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3.28084
    }

     //km

     if(select1ValorComprimento === "km"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1000000

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 100000

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1000
    
    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1
        
    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 39370.08

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1093.6133333333335

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3280.8334383331235

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3280.84

    }else if(select1ValorComprimento === "km"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.6213712121212122
    }

    //in

    if(select1ValorComprimento === "in"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 25.399999187200024

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 2.5399999187200026

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.025399999187200026
    
    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.000025399999187200026
        
    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.027777777777777776

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.08333316666699998

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.08333333333333333

    }else if(select1ValorComprimento === "in"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.000015782828282828283
    }

    //yd

    if(select1ValorComprimento === "yd"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 914.399970739201

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 91.4399970739201

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.914399970739201
    
    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.000914399970739201
        
    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 36

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 2.999994000012

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 3

    }else if(select1ValorComprimento === "yd"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0005681818181818182
    }

    //ft-us

    if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 304.8005998463808

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 30.48005998463808

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.3048005998463808
    
    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.00030480059984638083
        
    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 12.000024000000002

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.333334

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1.000002

    }else if(select1ValorComprimento === "ft-us"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0001893943181818182
    }

    //ft

    if(select1ValorComprimento === "ft"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 304.7999902464003

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 30.47999902464003

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.3047999902464003
    
    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0003047999902464003
        
    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 12

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.3333333333333333

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.999998000004

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1

    }else if(select1ValorComprimento === "ft"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 0.0001893939393939394
    }

    //mi

    if(select1ValorComprimento === "mi"  && select2ValorComprimento === "mm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1609343.9485009937

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "cm") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 160934.39485009937

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "m") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1609.3439485009937
    
    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "km") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1.6093439485009937
        
    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "in") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 63360

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "yd") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1760

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "ft-us") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 5279.98944002112

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "ft") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 5280

    }else if(select1ValorComprimento === "mi"  && select2ValorComprimento === "mi") {
        resultadoComprimento.innerHTML =  entradaComprimento.value * 1
    }

    
}
