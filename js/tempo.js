//pegando os seletores
let entradaTempo = document.getElementById('entradaTempo');
let resultadoTempo = document.getElementById('resultadoTempo');
let select1Tempo = document.getElementById('select1Tempo');
let select2Tempo = document.getElementById('select2Tempo');
let select1ValorTempo,select2ValorTempo;


entradaTempo.addEventListener("keyup" ,converter)
select1Tempo.addEventListener("change" ,converter)
select2Tempo.addEventListener("change" ,converter)

select1ValorTempo = select1Tempo.value
select2ValorTempo = select2Tempo.value


function converter() {
    select1ValorTempo = select1Tempo.value
    select2ValorTempo = select2Tempo.value
   
    
    //ns

    if(select1ValorTempo === "ns"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.001

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.000001

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1e-9

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1.6666666666666667e-11

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2.777777777777778e-13

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.1574074074074075e-14

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.6534391534391536e-15

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.802570537683474e-16

    }else if(select1ValorTempo === "ns" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.168808781402895e-17
        }
    

    //mu

    if(select1ValorTempo === "mu"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 999.9999999999999

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1
    
    }else if(select1ValorTempo === "mu" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.001

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.000001

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1.6666666666666667e-8

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2.7777777777777777e-10

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.1574074074074074e-11

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.6534391534391534e-12

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.802570537683474e-13

    }else if(select1ValorTempo === "mu" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.168808781402895e-14
        }

    //ms

    if(select1ValorTempo === "ms"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1000000

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1000.0000000000001
    
    }else if(select1ValorTempo === "ms" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.001

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.000016666666666666667

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2.7777777777777776e-7

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.1574074074074074e-8

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1.6534391534391535e-9

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.802570537683474e-10

    }else if(select1ValorTempo === "ms" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.168808781402895e-11
        }

    //s

    if(select1ValorTempo === "s"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 999999999.9999999

    }else if(select1ValorTempo === "s" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1000000
    
    }else if(select1ValorTempo === "s" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1000

    }else if(select1ValorTempo === "s" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "s" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.016666666666666666

    }else if(select1ValorTempo === "s" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.0002777777777777778

    }else if(select1ValorTempo === "s" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.000011574074074074073

    }else if(select1ValorTempo === "s" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.0000016534391534391535

    }else if(select1ValorTempo === "s" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.802570537683474e-7

    }else if(select1ValorTempo === "s" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 3.168808781402895e-8
        }

    //min

    if(select1ValorTempo === "min"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 60000000000

    }else if(select1ValorTempo === "min" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 60000000
    
    }else if(select1ValorTempo === "min" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 60000

    }else if(select1ValorTempo === "min" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 60

    }else if(select1ValorTempo === "min" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "min" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 0.016666666666666666

    }else if(select1ValorTempo === "min" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.0006944444444444445

    }else if(select1ValorTempo === "min" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.0000992063492063492

    }else if(select1ValorTempo === "min" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.000022815423226100844

    }else if(select1ValorTempo === "min" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.000001901285268841737
        }

    //h

    if(select1ValorTempo === "h"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 3600000000000

    }else if(select1ValorTempo === "h" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 3600000000
    
    }else if(select1ValorTempo === "h" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 3600000

    }else if(select1ValorTempo === "h" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 3600

    }else if(select1ValorTempo === "h" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 60

    }else if(select1ValorTempo === "h" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "h" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.041666666666666664

    }else if(select1ValorTempo === "h" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.005952380952380952

    }else if(select1ValorTempo === "h" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.0013689253935660506

    }else if(select1ValorTempo === "h" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.00011407711613050422
        }

    //d

    if(select1ValorTempo === "d"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 86400000000000

    }else if(select1ValorTempo === "d" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 86400000000
    
    }else if(select1ValorTempo === "d" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 86400000

    }else if(select1ValorTempo === "d" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 86400

    }else if(select1ValorTempo === "d" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 1440

    }else if(select1ValorTempo === "d" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 24

    }else if(select1ValorTempo === "d" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "d" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.14285714285714285

    }else if(select1ValorTempo === "d" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.03285420944558522

    }else if(select1ValorTempo === "d" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.0027378507871321013
        }

    //week

    if(select1ValorTempo === "week"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 604800000000000

    }else if(select1ValorTempo === "week" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 604800000000
    
    }else if(select1ValorTempo === "week" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 604800000

    }else if(select1ValorTempo === "week" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 604800

    }else if(select1ValorTempo === "week" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 10080

    }else if(select1ValorTempo === "week" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 168

    }else if(select1ValorTempo === "week" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 7

    }else if(select1ValorTempo === "week" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "week" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.2299794661190965

    }else if(select1ValorTempo === "week" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.019164955509924708
        }

    //month

    if(select1ValorTempo === "month"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2629800000000000

    }else if(select1ValorTempo === "month" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2629800000000
    
    }else if(select1ValorTempo === "month" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2629800000 

    }else if(select1ValorTempo === "month" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 2629800

    }else if(select1ValorTempo === "month" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 43830

    }else if(select1ValorTempo === "month" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 730.5

    }else if(select1ValorTempo === "month" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 30.4375

    }else if(select1ValorTempo === "month" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 4.348214285714286

    }else if(select1ValorTempo === "month" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1

    }else if(select1ValorTempo === "month" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 0.08333333333333333
        }

    //year

    if(select1ValorTempo === "year"  && select2ValorTempo === "ns") {
        resultadoTempo.innerHTML =  entradaTempo.value * 31557600000000000

    }else if(select1ValorTempo === "year" && select2ValorTempo === "mu") {
        resultadoTempo.innerHTML =  entradaTempo.value * 31557600000000
    
    }else if(select1ValorTempo === "year" && select2ValorTempo === "ms") {
        resultadoTempo.innerHTML =  entradaTempo.value * 31557600000

    }else if(select1ValorTempo === "year" && select2ValorTempo === "s") {
        resultadoTempo.innerHTML =  entradaTempo.value * 31557600

    }else if(select1ValorTempo === "year" && select2ValorTempo === "min") {
        resultadoTempo.innerHTML =  entradaTempo.value * 525960

    }else if(select1ValorTempo === "year" && select2ValorTempo === "h") {
        resultadoTempo.innerHTML =  entradaTempo.value * 8766

    }else if(select1ValorTempo === "year" && select2ValorTempo === "d") {
            resultadoTempo.innerHTML =  entradaTempo.value * 365.25

    }else if(select1ValorTempo === "year" && select2ValorTempo === "week") {
            resultadoTempo.innerHTML =  entradaTempo.value * 52.17857142857143

    }else if(select1ValorTempo === "year" && select2ValorTempo === "month") {
            resultadoTempo.innerHTML =  entradaTempo.value * 12

    }else if(select1ValorTempo === "year" && select2ValorTempo === "year") {
            resultadoTempo.innerHTML =  entradaTempo.value * 1
        }
}