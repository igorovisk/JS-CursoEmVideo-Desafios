

function verificar(){
    
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt('Digite a nota 1'))
    let n2 = Number(window.prompt('Digite a nota 2'))
    if((n1 < 0 || n2 < 0) || (n1 > 10 || n2 > 10)){
        window.alert('Nota inválida, por favor digite uma nota maior que 0 e menor que 10')
    }else{
    

    let elemento = document.createElement('h1')
    elemento.innerHTML = `Calculando média..`

    let res = document.getElementById('res')
    res.innerHTML = ''
    let media = (n1+n2)/2
          
    elemento.innerHTML += `<br><br>- Analisando a situação de ${nome}...`
   
    elemento.innerHTML += `<br><br>- Com as notas ${n1} e ${n2}, a média é ${media}`
    
    if(media > 6){
    elemento.innerHTML += `<br><br>- Com a média acima de 6, ${nome} está APROVADO(A)`
        
    }else if(media < 6 && media >= 3){
        elemento.innerHTML += `<br><br>- Com a média entre 3 e 6, ${nome} está EM RECUPERAÇÃO`
    }else{
        elemento.innerHTML += `<br><br>- Com a média abaixo de 6, ${nome} está REPROVADO(A)`
    }
    res.appendChild(elemento) 
    
    }
}     
    

