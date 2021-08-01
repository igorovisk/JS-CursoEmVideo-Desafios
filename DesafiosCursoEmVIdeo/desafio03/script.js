

function acao(){
    let numero = window.prompt('Digite um número qualquer')
    let antecessor = Number(numero) - 1
    let sucessor = Number(numero) + 1
    window.alert(`Antes de ${numero}, temos o número ${antecessor}.\nDepois de ${numero}, temos o número ${sucessor}.`)
    
}