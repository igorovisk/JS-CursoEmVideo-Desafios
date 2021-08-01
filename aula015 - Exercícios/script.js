function calcular(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[erro] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(inicio < fim){
            for (var c = i; c < f; c+= p){ //começa do dado inicial 'i', vai até o final 'f' e incrementa pelo passo 'p'
                res.innerHTML += `${c} \u{1F449}` // +- pra concatenar com o 'Contando = '
            }
        } else{
            for (var c = i; c > f; c-= p){ //começa do dado inicial 'i', vai até o final 'f' e decrementa pelo passo 'p'
                res.innerHTML += `${c} \u{1F449}` // +- pra concatenar com o 'Contando = '
            }
        }
        res.innerHTML += `${c} \u{1F3C1}` 
    }
}


 
 



