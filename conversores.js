//pegando os seletores
let entrada = document.getElementById('entrada');
let resultado = document.getElementById('resultado');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select1Valor,select2Valor;


entrada.addEventListener("keyup" ,converter)
select1.addEventListener("change" ,converter)
select2.addEventListener("change" ,converter)

select1Valor = select1.value
select2Valor = select2.value


function converter() {
    select1Valor = select1.value
    select2Valor = select2.value
   
    //mm

    if(select1Valor === "mm"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "mm"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 0.1

    }else if(select1Valor === "mm"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.001
    
    }else if(select1Valor === "mm"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.000001
        
    }else if(select1Valor === "mm"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 0.03937008

    }else if(select1Valor === "mm"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 0.0010936133333333334

    }else if(select1Valor === "mm"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 0.003280833438333123

    }else if(select1Valor === "mm"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 0.00328084

    }else if(select1Valor === "mm"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 6.213712
    }

    //cm
    
    if(select1Valor === "cm"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 10

    }else if(select1Valor === "cm"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "cm"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.01
    
    }else if(select1Valor === "cm"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.00001
        
    }else if(select1Valor === "cm"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 0.3937008

    }else if(select1Valor === "cm"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 0.010936133333333334

    }else if(select1Valor === "cm"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 0.032808334383331236

    }else if(select1Valor === "cm"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 0.0328084

    }else if(select1Valor === "cm"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.000006213712121212121
    }

    //m

    if(select1Valor === "m"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 1000

    }else if(select1Valor === "m"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 100

    }else if(select1Valor === "m"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 1
    
    }else if(select1Valor === "m"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.001
        
    }else if(select1Valor === "m"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 39.37008

    }else if(select1Valor === "m"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 1.0936133333333333

    }else if(select1Valor === "m"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 3.280833438333123

    }else if(select1Valor === "m"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 3.28084

    }else if(select1Valor === "m"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 3.28084
    }

     //km

     if(select1Valor === "km"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 1000000

    }else if(select1Valor === "km"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 100000

    }else if(select1Valor === "km"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 1000
    
    }else if(select1Valor === "km"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 1
        
    }else if(select1Valor === "km"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 39370.08

    }else if(select1Valor === "km"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 1093.6133333333335

    }else if(select1Valor === "km"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 3280.8334383331235

    }else if(select1Valor === "km"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 3280.84

    }else if(select1Valor === "km"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.6213712121212122
    }

    //in

    if(select1Valor === "in"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 25.399999187200024

    }else if(select1Valor === "in"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 2.5399999187200026

    }else if(select1Valor === "in"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.025399999187200026
    
    }else if(select1Valor === "in"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.000025399999187200026
        
    }else if(select1Valor === "in"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "in"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 0.027777777777777776

    }else if(select1Valor === "in"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 0.08333316666699998

    }else if(select1Valor === "in"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 0.08333333333333333

    }else if(select1Valor === "in"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.000015782828282828283
    }

    //yd

    if(select1Valor === "yd"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 914.399970739201

    }else if(select1Valor === "yd"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 91.4399970739201

    }else if(select1Valor === "yd"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.914399970739201
    
    }else if(select1Valor === "yd"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.000914399970739201
        
    }else if(select1Valor === "yd"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 36

    }else if(select1Valor === "yd"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "yd"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 2.999994000012

    }else if(select1Valor === "yd"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 3

    }else if(select1Valor === "yd"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.0005681818181818182
    }

    //ft-us

    if(select1Valor === "ft-us"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 304.8005998463808

    }else if(select1Valor === "ft-us"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 30.48005998463808

    }else if(select1Valor === "ft-us"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.3048005998463808
    
    }else if(select1Valor === "ft-us"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.00030480059984638083
        
    }else if(select1Valor === "ft-us"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 12.000024000000002

    }else if(select1Valor === "ft-us"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 0.333334

    }else if(select1Valor === "ft-us"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "ft-us"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 1.000002

    }else if(select1Valor === "ft-us"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.0001893943181818182
    }

    //ft

    if(select1Valor === "ft"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 304.7999902464003

    }else if(select1Valor === "ft"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 30.47999902464003

    }else if(select1Valor === "ft"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 0.3047999902464003
    
    }else if(select1Valor === "ft"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 0.0003047999902464003
        
    }else if(select1Valor === "ft"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 12

    }else if(select1Valor === "ft"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 0.3333333333333333

    }else if(select1Valor === "ft"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 0.999998000004

    }else if(select1Valor === "ft"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 1

    }else if(select1Valor === "ft"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 0.0001893939393939394
    }

    //mi

    if(select1Valor === "mi"  && select2Valor === "mm") {
        resultado.innerHTML =  entrada.value * 1609343.9485009937

    }else if(select1Valor === "mi"  && select2Valor === "cm") {
        resultado.innerHTML =  entrada.value * 160934.39485009937

    }else if(select1Valor === "mi"  && select2Valor === "m") {
        resultado.innerHTML =  entrada.value * 1609.3439485009937
    
    }else if(select1Valor === "mi"  && select2Valor === "km") {
        resultado.innerHTML =  entrada.value * 1.6093439485009937
        
    }else if(select1Valor === "mi"  && select2Valor === "in") {
        resultado.innerHTML =  entrada.value * 63360

    }else if(select1Valor === "mi"  && select2Valor === "yd") {
    resultado.innerHTML =  entrada.value * 1760

    }else if(select1Valor === "mi"  && select2Valor === "ft-us") {
    resultado.innerHTML =  entrada.value * 5279.98944002112

    }else if(select1Valor === "mi"  && select2Valor === "ft") {
    resultado.innerHTML =  entrada.value * 5280

    }else if(select1Valor === "mi"  && select2Valor === "mi") {
    resultado.innerHTML =  entrada.value * 1
    }
}
