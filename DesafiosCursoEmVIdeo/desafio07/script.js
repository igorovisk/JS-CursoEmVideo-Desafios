

function converter(){
    let cotacao = window.prompt('Digite a cotação do dólar')
    let reais = window.prompt('Quantos reais deseja converter?')
    let elemento = document.createElement('h1')
    elemento.innerHTML = `A quantia de ${reais} reais, na cotação de ${cotacao} corresponde a...`

    let res = document.getElementById('res')
    
    let dolar = Number(reais) * cotacao
   
   


    elemento.innerHTML += `<br>${dolar} dolares(s)`
        
    res.appendChild(elemento)
}
