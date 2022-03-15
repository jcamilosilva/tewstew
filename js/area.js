//pegando os seletores
let entradaArea = document.getElementById('entradaArea');
let resultadoArea = document.getElementById('resultadoArea');
let select1Area = document.getElementById('select1Area');
let select2Area = document.getElementById('select2Area');
let select1ValorArea,select2ValorArea;


entradaArea.addEventListener("keyup" ,converter)
select1Area.addEventListener("change" ,converter)
select2Area.addEventListener("change" ,converter)

select1ValorArea = select1Area.value
select2ValorArea = select2Area.value


function converter() {
    select1ValorArea = select1Area.value
    select2ValorArea = select2Area.value
   
    //mm2

    if(select1ValorArea === "mm2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.009999999999999998

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.000001
    
    }else if(select1ValorArea === "mm2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 9.999999999999999e-11
        
    }else if(select1ValorArea === "mm2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 1e-12

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0015500015999999998

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0000011959888888888887

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.000010763899999999999

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 2.4710514233241503e-10

    }else if(select1ValorArea === "mm2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 3.861017848943985e-13
    }
    //cm2
    
    if(select1ValorArea === "cm2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 100.00000000000001

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0001
    
    }else if(select1ValorArea === "cm2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 1e-8
        
    }else if(select1ValorArea === "cm2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 1e-10

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.15500016

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.00011959888888888889

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.00107639

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 2.4710514233241506e-8

    }else if(select1ValorArea === "cm2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 3.861017848943985e-11
    }

    //m2

    if(select1ValorArea === "m2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 1000000

    }else if(select1ValorArea === "m2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 10000

    }else if(select1ValorArea === "m2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 1
    
    }else if(select1ValorArea === "m2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0001
        
    }else if(select1ValorArea === "m2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.000001

    }else if(select1ValorArea === "m2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 1550.0016

    }else if(select1ValorArea === "m2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 1.1959888888888888

    }else if(select1ValorArea === "m2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 10.7639

    }else if(select1ValorArea === "m2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0002471051423324151

    }else if(select1ValorArea === "m2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 3.861017848943985e-7
    }

     //ha

     if(select1ValorArea === "ha"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 10000000000

    }else if(select1ValorArea === "ha"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 100000000

    }else if(select1ValorArea === "ha"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 10000
    
    }else if(select1ValorArea === "ha"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 1
        
    }else if(select1ValorArea === "ha"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.01

    }else if(select1ValorArea === "ha"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 15500016

    }else if(select1ValorArea === "ha"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 11959.888888888889

    }else if(select1ValorArea === "ha"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 107639

    }else if(select1ValorArea === "ha"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 2.4710514233241505

    }else if(select1ValorArea === "ha"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0038610178489439854
    }
    //km2

    if(select1ValorArea === "km2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 1000000000000

    }else if(select1ValorArea === "km2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 10000000000

    }else if(select1ValorArea === "km2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 1000000
    
    }else if(select1ValorArea === "km2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 100
        
    }else if(select1ValorArea === "km2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "km2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 1550001600

    }else if(select1ValorArea === "km2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 1195988.888888889

    }else if(select1ValorArea === "km2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 10763900

    }else if(select1ValorArea === "km2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 247.10514233241506

    }else if(select1ValorArea === "km2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.3861017848943985
    }

    //in2

    if(select1ValorArea === "in2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 645.1606243503232

    }else if(select1ValorArea === "in2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 6.451606243503233

    }else if(select1ValorArea === "in2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0006451606243503233
    
    }else if(select1ValorArea === "in2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 6.451606243503233e-8
        
    }else if(select1ValorArea === "in2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 6.451606243503233e-10

    }else if(select1ValorArea === "in2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "in2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0007716049382716049

    }else if(select1ValorArea === "in2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.006944444444444444

    }else if(select1ValorArea === "in2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 1.5942250790735638e-7

    }else if(select1ValorArea === "in2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 2.4909766860524435e-10
    }

    //yd2

    if(select1ValorArea === "yd2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 836128.169158019

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 8361.28169158019

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.836128169158019
    
    }else if(select1ValorArea === "yd2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0000836128169158019
        
    }else if(select1ValorArea === "yd2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 8.36128169158019e-7

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 1296

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 9

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 0.00020661157024793388

    }else if(select1ValorArea === "yd2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 3.228305785123967e-7
    }

    //ft2

    if(select1ValorArea === "ft2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 92903.12990644656

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 929.0312990644655

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.09290312990644656
    
    }else if(select1ValorArea === "ft2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 0.000009290312990644655
        
    }else if(select1ValorArea === "ft2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 9.290312990644656e-8

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 144

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.1111111111111111

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 0.00002295684113865932

    }else if(select1ValorArea === "ft2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 3.587006427915519e-8
    }

    //ac

    if(select1ValorArea === "ac"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 4046860338.7248125

    }else if(select1ValorArea === "ac"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 40468603.38724812

    }else if(select1ValorArea === "ac"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 4046.860338724812
    
    }else if(select1ValorArea === "ac"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 0.4046860338724812
        
    }else if(select1ValorArea === "ac"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.004046860338724812

    }else if(select1ValorArea === "ac"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 6272640

    }else if(select1ValorArea === "ac"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 4840

    }else if(select1ValorArea === "ac"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 43560

    }else if(select1ValorArea === "ac"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 1

    }else if(select1ValorArea === "ac"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 0.0015625
    }

    //mi2

    if(select1ValorArea === "mi2"  && select2ValorArea === "mm2") {
        resultadoArea.innerHTML =  entradaArea.value * 2589990616783.88

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "cm2") {
        resultadoArea.innerHTML =  entradaArea.value * 25899906167.838795

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "m2") {
        resultadoArea.innerHTML =  entradaArea.value * 2589990.6167838797
    
    }else if(select1ValorArea === "mi2"  && select2ValorArea === "ha") {
        resultadoArea.innerHTML =  entradaArea.value * 258.999061678388
        
    }else if(select1ValorArea === "mi2"  && select2ValorArea === "km2") {
        resultadoArea.innerHTML =  entradaArea.value * 2.5899906167838798

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "in2") {
        resultadoArea.innerHTML =  entradaArea.value * 4014489600

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "yd2") {
        resultadoArea.innerHTML =  entradaArea.value * 3097600

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "ft2") {
        resultadoArea.innerHTML =  entradaArea.value * 27878400

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "ac") {
        resultadoArea.innerHTML =  entradaArea.value * 640

    }else if(select1ValorArea === "mi2"  && select2ValorArea === "mi2") {
        resultadoArea.innerHTML =  entradaArea.value * 1
    }


    
}
