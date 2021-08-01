

function verificar(){
    let anterior = Number(window.prompt('Qual era o preço anterior do produto?'))
    let atual = Number(window.prompt('Qual é o preço atual do produto?'))
    
    let elemento = document.createElement('h1')
    elemento.innerHTML = `Calculando alteração de preços:`

    let res = document.getElementById('res')
    let diferenca = anterior - atual
    let porcento = atual * 100 / anterior
       
    elemento.innerHTML += `<br><br>- O produto custava R$${anterior} e agora custa  R$${atual}`
   

    
    if(diferenca <= 0){
        elemento.innerHTML += `<br><br>- Hoje o produto está mais caro`
        elemento.innerHTML += `<br><br>- O preço subiu R$ ${diferenca *-1} em relação ao preço anterior`
        elemento.innerHTML += `<br><br>- Uma variação de ${(100 - porcento) * -1}% pra cima`
    }else{
        elemento.innerHTML += `<br><br>- Hoje o produto está mais barato`
        elemento.innerHTML += `<br><br>- O preço abaixou R$${diferenca} em relação ao preço anterior`
        elemento.innerHTML += `<br><br>- Uma variação de ${100 -porcento}% pra baixo`
    }
    res.appendChild(elemento) 
    
    }
            
    

