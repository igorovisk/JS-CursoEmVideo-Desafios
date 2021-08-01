

function verificar(){
    let ano = Number(window.prompt('Digite o ano:'))
    if(ano < 0){
        window.alert('Valor de ano inválido!, por favor digite outro valor')
    } else{
                   
    let elemento = document.createElement('h1')
    elemento.innerHTML = `Analisando o ano de ${ano}...`

    let res = document.getElementById('res')
    
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
        var bissexto = 'é'
    } else {
        var bissexto = 'não é'
    }

    elemento.innerHTML += `<br><br>- O ano de ${ano} ${bissexto} um ano bissexto!`
               
    res.appendChild(elemento) 

    }
}
