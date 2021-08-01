let parimp = function parimp(n){
    if(n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}


function soma(n1, n2){
    var total = n1 + n2
    return total
}

let total = soma(2,8)
console.log('total é ' + total)
console.log(parimp(total))