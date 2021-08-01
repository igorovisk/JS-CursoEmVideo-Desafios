

function reajustar(){
    let nome = window.prompt('Digite o nome do funcionário')
    let salario = window.prompt(`Qual o salário de ${nome}?`)
    let reajuste = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    let elemento = document.createElement('h1')
    elemento.innerHTML = `Calculando o reajuste do salário de ${nome} em ${reajuste}!`

    let res = document.getElementById('res')
    
    let conta = Number(salario) * 10/100
    let contafinal = Number(salario) + Number(salario) * 10/100
   
    elemento.innerHTML += `<br><br>- O Salário original era R$${salario}`
    elemento.innerHTML += `<br><br>- Você acaba de um reajuste de ${reajuste} por cento`
    elemento.innerHTML += `<br><br>- O salário será acrescido de R$${conta}`
    elemento.innerHTML += `<br><br>- O salário final totalizará R$${contafinal}`
        
    res.appendChild(elemento)
}
