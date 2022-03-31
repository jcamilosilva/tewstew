
function consultaTicket() {
    let entrada1Moedas = document.querySelector("#entradaMoedas")
    let select1Moedas = document.querySelector("#select1Moedas")
    let select2Moedas = document.querySelector("#select2Moedas")
    let resultadoMoedas = document.querySelector("#resultadoMoedas")

    let url1 = 'https://free.currconv.com/api/v7/currencies?apiKey=3c241f138791c7e11584'
    let url2 = 'https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=3c241f138791c7e11584'

    fetch(url1).then(function(response){
        response.json().then(function(data) {
            let Obj = data.results
            
            for (const [key, value] of Object.entries(Obj)) {

                select1Moedas = document.createElement( "option")
                document.querySelector("#select1Moedas").appendChild(select1Moedas)
                select1Moedas.innerHTML = `${value.id + ' - ' + value.currencyName}`

                select2Moedas = document.createElement( "option")
                document.querySelector("#select2Moedas").appendChild(select2Moedas)
                select2Moedas.innerHTML = `${value.id + ' - ' + value.currencyName}`
                
              }
        })
    })

    fetch(url2)
    .then()
}
consultaTicket()




    
 
    


 


    


