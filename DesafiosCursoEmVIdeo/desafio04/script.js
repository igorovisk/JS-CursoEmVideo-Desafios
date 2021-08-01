
function comprar(){
    let produto = window.prompt('Qual o produto que está comprando?')
    let preco = window.prompt(`Qual o preço do ${produto}?`)
    let dinheiro = window.prompt('Qual o valor dado para pagamento?')
    let troco = calculaTroco(preco,dinheiro)
    if(troco > 0){
        window.alert(`Você comprou ${produto}, que custou R$ ${preco}. \nDeu R$${dinheiro} em dinheiro e vai receber R$${troco} de troco.\nVolte sempre!`)
    }
}

function calculaTroco(preco, dinheiro){
    let calculo = Number(dinheiro) - Number(preco)
    if(calculo > 0){
        return calculo
    }
    else{
        window.alert('Valor do produto não atingido. Digite um valor válido!')
        comprar()
    }
    
}

