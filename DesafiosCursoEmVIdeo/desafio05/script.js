
function converter(){
    let metros = window.prompt('Digite uma distância em metros')
    let elemento = document.createElement('h1')
    elemento.innerHTML = `A distância de ${metros}, corresponde a...`
    let res = document.getElementById('res')
    
    let quilometros = Number(metros)/1000
    let hectometros = Number(metros)/100
    let decâmetros = Number(metros)/10
    let decimetros = Number(metros)*10
    let centimetros = Number(metros)*100
    let milimetros = Number(metros)*1000


    elemento.innerHTML += `<br>${quilometros} quilômetro(s)`
    elemento.innerHTML += `<br>${hectometros} hectômetro(s)`
    elemento.innerHTML += `<br>${decâmetros} decâmetro(s)`
    elemento.innerHTML += `<br>${decimetros} decímetro(s)`
    elemento.innerHTML += `<br>${centimetros} centímetro(s)`
    elemento.innerHTML += `<br>${milimetros} milímetro(s)`
    res.appendChild(elemento)
}




