//pegando os seletores
let entradaMedidas = document.getElementById('entradaMedidas');
let resultadoMedidas = document.getElementById('resultadoMedidas');
let select1Medidas = document.getElementById('select1Medidas');
let select2Medidas = document.getElementById('select2Medidas');
let select1ValorMedidas,select2ValorMedidas;


entradaMedidas.addEventListener("keyup" ,converter)
select1Medidas.addEventListener("change" ,converter)
select2Medidas.addEventListener("change" ,converter)

select1ValorMedidas = select1Medidas.value
select2ValorMedidas = select2Medidas.value


function converter() {
    select1ValorMedidas = select1Medidas.value
    select2ValorMedidas = select2Medidas.value
   
    //mm

    if(select1ValorMedidas === "mm"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.1

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.001
    
    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.000001
        
    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.03937008

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0010936133333333334

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.003280833438333123

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.00328084

    }else if(select1ValorMedidas === "mm"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 6.213712
    }

    //cm
    
    if(select1ValorMedidas === "cm"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 10

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.01
    
    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.00001
        
    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.3937008

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.010936133333333334

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  enentradaMedidastrada.value * 0.032808334383331236

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0328084

    }else if(select1ValorMedidas === "cm"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.000006213712121212121
    }

    //m

    if(select1ValorMedidas === "m"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1000

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 100

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1
    
    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.001
        
    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 39.37008

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1.0936133333333333

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3.280833438333123

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3.28084

    }else if(select1ValorMedidas === "m"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3.28084
    }

     //km

     if(select1ValorMedidas === "km"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1000000

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 100000

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1000
    
    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1
        
    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 39370.08

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1093.6133333333335

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3280.8334383331235

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3280.84

    }else if(select1ValorMedidas === "km"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.6213712121212122
    }

    //in

    if(select1ValorMedidas === "in"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 25.399999187200024

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 2.5399999187200026

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.025399999187200026
    
    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.000025399999187200026
        
    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.027777777777777776

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.08333316666699998

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.08333333333333333

    }else if(select1ValorMedidas === "in"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.000015782828282828283
    }

    //yd

    if(select1ValorMedidas === "yd"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 914.399970739201

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 91.4399970739201

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.914399970739201
    
    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.000914399970739201
        
    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 36

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 2.999994000012

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 3

    }else if(select1ValorMedidas === "yd"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0005681818181818182
    }

    //ft-us

    if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 304.8005998463808

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 30.48005998463808

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.3048005998463808
    
    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.00030480059984638083
        
    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 12.000024000000002

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.333334

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1.000002

    }else if(select1ValorMedidas === "ft-us"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0001893943181818182
    }

    //ft

    if(select1ValorMedidas === "ft"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 304.7999902464003

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 30.47999902464003

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.3047999902464003
    
    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0003047999902464003
        
    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 12

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.3333333333333333

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.999998000004

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1

    }else if(select1ValorMedidas === "ft"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 0.0001893939393939394
    }

    //mi

    if(select1ValorMedidas === "mi"  && select2ValorMedidas === "mm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1609343.9485009937

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "cm") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 160934.39485009937

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "m") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1609.3439485009937
    
    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "km") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1.6093439485009937
        
    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "in") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 63360

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "yd") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1760

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "ft-us") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 5279.98944002112

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "ft") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 5280

    }else if(select1ValorMedidas === "mi"  && select2ValorMedidas === "mi") {
        resultadoMedidas.innerHTML =  entradaMedidas.value * 1
    }

    
}
