var idade = 222
console.log(`Você tem ${idade} ano(s).`)
if (idade < 16){
    console.log('Não vota')
} else {
    if(idade < 18 || idade > 65){
        console.log('Voto Opcional')
    }
    else
    console.log('Vota')
}