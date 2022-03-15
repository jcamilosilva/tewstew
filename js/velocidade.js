//pegando os seletores
let entradaVelocidade = document.getElementById('entradaVelocidade');
let resultadoVelocidade = document.getElementById('resultadoVelocidade');
let select1Velocidade = document.getElementById('select1Velocidade');
let select2Velocidade = document.getElementById('select2Velocidade');
let select1ValorVelocidade,select2ValorVelocidade;


entradaVelocidade.addEventListener("keyup" ,converter)
select1Velocidade.addEventListener("change" ,converter)
select2Velocidade.addEventListener("change" ,converter)

select1ValorVelocidade = select1Velocidade.value
select2ValorVelocidade = select2Velocidade.value


function converter() {
    select1ValorVelocidade = select1Velocidade.value
    select2ValorVelocidade = select2Velocidade.value
   
    //m/s

    if(select1ValorVelocidade === "m/s"  && select2ValorVelocidade === "m/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1

    }else if(select1ValorVelocidade === "m/s"  && select2ValorVelocidade === "km/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 3.6

    }else if(select1ValorVelocidade === "m/s"  && select2ValorVelocidade === "m/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 2.2369362920544025
    
    }else if(select1ValorVelocidade === "m/s"  && select2ValorVelocidade === "knot") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.943845249221964
        
    }else if(select1ValorVelocidade === "m/s"  && select2ValorVelocidade === "ft/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 3.2808407699039956

    }

    //km/h

    if(select1ValorVelocidade === "km/h"  && select2ValorVelocidade === "m/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.2777777777777778

    }else if(select1ValorVelocidade === "km/h"  && select2ValorVelocidade === "km/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1

    }else if(select1ValorVelocidade === "km/h"  && select2ValorVelocidade === "m/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.621371192237334
    
    }else if(select1ValorVelocidade === "km/h"  && select2ValorVelocidade === "knot") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.5399570136727677
        
    }else if(select1ValorVelocidade === "km/h"  && select2ValorVelocidade === "ft/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.9113446583066653

    }

    //m/h

    if(select1ValorVelocidade === "m/h"  && select2ValorVelocidade === "m/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.44704

    }else if(select1ValorVelocidade === "m/h"  && select2ValorVelocidade === "km/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.609344

    }else if(select1ValorVelocidade === "m/h"  && select2ValorVelocidade === "m/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1
    
    }else if(select1ValorVelocidade === "m/h"  && select2ValorVelocidade === "knot") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.8689765802121867
        
    }else if(select1ValorVelocidade === "m/h"  && select2ValorVelocidade === "ft/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.466667057777882

    }

    //knot

    if(select1ValorVelocidade === "knot"  && select2ValorVelocidade === "m/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.51444424416

    }else if(select1ValorVelocidade === "knot"  && select2ValorVelocidade === "km/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.851999278976

    }else if(select1ValorVelocidade === "knot"  && select2ValorVelocidade === "m/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.150779
    
    }else if(select1ValorVelocidade === "knot"  && select2ValorVelocidade === "knot") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1
        
    }else if(select1ValorVelocidade === "knot"  && select2ValorVelocidade === "ft/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.6878096500825732

    }

    //ft/s

    if(select1ValorVelocidade === "ft/s"  && select2ValorVelocidade === "m/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.30479991872000006

    }else if(select1ValorVelocidade === "ft/s"  && select2ValorVelocidade === "km/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1.0972797073920002

    }else if(select1ValorVelocidade === "ft/s"  && select2ValorVelocidade === "m/h") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.681818
    
    }else if(select1ValorVelocidade === "ft/s"  && select2ValorVelocidade === "knot") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 0.5924838739671128
        
    }else if(select1ValorVelocidade === "ft/s"  && select2ValorVelocidade === "ft/s") {
        resultadoVelocidade.innerHTML =  entradaVelocidade.value * 1

    }
    

    
}
