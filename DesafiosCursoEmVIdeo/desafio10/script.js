

function calcularDelta(){
    let a = Number(window.prompt('Digite o valor de A'))
    if(a < 0){
        window.alert('Valor de A inválido!, por favor digite outro valor')
    } else{
        let b = window.prompt(`Digite o valor de B`)
        let c = window.prompt(`Digite o valor de C`)
   
    let elemento = document.createElement('h1')
    elemento.innerHTML = `Resolvendo Bhaskara:`

    let res = document.getElementById('res')
    let delta = b*b - 4 * a * c
       
    elemento.innerHTML += `<br><br>- A equação atual é ${a}x&sup2 + ${b}x + ${c} = 0`
    elemento.innerHTML += `<br><br>- O cálculo realizado será &#916 = ${b}&sup2 - 4 * ${a} * ${c}`
    elemento.innerHTML += `<br><br>- O valor calculo foi &#916: ${delta}`
            
    res.appendChild(elemento) 
    }
}
