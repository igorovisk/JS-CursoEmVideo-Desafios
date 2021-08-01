function calcular(){
    
    var num = Number(entrada.value) 
    var res = document.getElementById('res') // pega o elemento tabela

    if(entrada.value.length == 0){
        window.alert('Por favor, insira um número')
    }else{
        res.innerHTML='' //limpa o elemento tabela
        for(var c = 1; c < 11; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}` // usado para selecionar o item, pro JS não faz muito sentido, mas usa-se para outras linguagens
            res.appendChild(item) // adiciona o filho item criado anteriormente a cada linha do FOR
        }
        
        
    }
   
}


