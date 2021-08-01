

function desconto(){
    let nome = window.prompt('Digite o nome do produto')
    let reais = window.prompt('Quantos reais vale o produto?')
    let elemento = document.createElement('h1')
    elemento.innerHTML = `Calculando desconto de 10% no produto: ${nome}!`

    let res = document.getElementById('res')
    
    let desconto = Number(reais) * 10/100
    let finaldesc = reais - desconto
   


    elemento.innerHTML += `<br>O preço original era R$${reais}`
    elemento.innerHTML += `<br>Você acaba de ganhar R$${desconto}`
    elemento.innerHTML += `<br>No fim você pagará R$${finaldesc}`

        
    res.appendChild(elemento)
}
