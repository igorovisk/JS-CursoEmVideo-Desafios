var armazem = []

function analisar(){
    var num = Number(document.getElementById('txti').value)
   
    if(num < 0 || num > 100 || armazem.includes(num)){
        window.alert('Número inválido ou já encontrado na lista')
        
    } else{
        armazem.push(num)
        var tabela = document.getElementById('tab')
        var item = document.createElement('li')
        item.innerHTML += `${num} adicionado`
        tabela.appendChild(item)
    }
}

function finalizar(){
   
    //soma total
    let soma = 0
    var maior = armazem[0]
    var menor = armazem[0]
    for(let i = 0; i < armazem.length; i++){
        
        if(armazem[i] > maior){
            maior = armazem[i]
        }
        if(armazem[i] < menor){
            menor = armazem[i]
        }

        soma = soma + armazem[i]
    }

    let result = document.getElementById('resultado')
    result.innerHTML = ''
    result.innerHTML += `<br> A lista tem ${armazem.length} elementos.`
    result.innerHTML += `<br> O maior número encontrado foi: ${maior}.`
    result.innerHTML += `<br> O menor número encontrado foi: ${menor}.`
    result.innerHTML += `<br> Somando todos os valores temos: ${soma}.`
    result.innerHTML += `<br> A média dos valores digitados é: ${soma/armazem.length}.`
}
