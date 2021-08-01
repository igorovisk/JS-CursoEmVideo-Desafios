

function converter(){
    let celsius = window.prompt('Digite uma temperatura em celsius')
    let elemento = document.createElement('h1')
    elemento.innerHTML = `A temperatura de ${celsius} celsius, corresponde a...`
    let res = document.getElementById('res')
    
    let kelvin = Number(celsius) + 273.15
    let faren = Number(celsius)*9/5 + 32
   
    elemento.innerHTML += `<br>${kelvin} kelvin(s)`
    elemento.innerHTML += `<br>${faren} farenheit(s)`
    
    res.appendChild(elemento)
}
