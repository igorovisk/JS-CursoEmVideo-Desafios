let num = document.getElementById('fnum')
let array = []
let lista = document.getElementById('flista')
let res = document.getElementById('res')

    function isNumber(n){
        if(Number(n) >= 0 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function inLista(a, n){
        if(a.indexOf(Number(n)) != -1){
            return false
        } else {
            return true
        }
    }

    function adicionar(){
        
        if(isNumber(num.value) && inLista(array, num.value)){
            array.push(Number(num.value))
            let item = document.createElement('option')
            item.innerText = `Número ${num.value} adicionado!`
            lista.appendChild(item)
        } else{
            window.alert('O número é inválido ou já foi digitado')
        }
    }
    
    function somar(a){
        var soma = 0
        for(let i = 0; i < a.length; i++){
            soma = soma + a[i]
        }
        return soma
    }

    function max(a){
        let max = Math.max(...a)
        return (max)
    }
    function min(a){
        let min = Math.min(...a)
        return (min)
    }

    function media(soma, a){
        var media = soma/a.length
        return media
    }

     

    
    function finalizar(){
        let soma = somar(array)
        let texto = document.createElement('p')
        texto.innerHTML += `<br>No total temos ${array.length} elementos`
        texto.innerHTML += `<br>O maior número é: ${max(array)}`
        texto.innerHTML += `<br>O menor número é: ${min(array)}`
        texto.innerHTML += `<br>A soma é: ${somar(array)}`
        texto.innerHTML += `<br>A média é: ${media(soma, array)}`
        res.innerHTML =''
        res.appendChild(texto)
    }
