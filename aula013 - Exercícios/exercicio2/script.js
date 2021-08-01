function verificar(){
var data = new Date()
var ano = data.getFullYear()

var formularioAno = window.document.getElementById('anonascimento')
var idade = ano - Number(formularioAno.value)

var resultado = window.document.getElementById('resultado')
var image = document.createElement('img') //ver linha abaixo
image.setAttribute('id', 'foto') // criei uma img com o id foto pelo javascript

resultado.style.textAlign = 'center'
if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
    window.alert(`Ano inválido. Por favor verifique a entrada dos dados`)
    } else {
        var fsex = window.document.getElementsByName('radsex') //Pega elemento pelo NOME
        var genero = ''

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                image.setAttribute('src', 'img/kid_male.jpg')
            } else if (idade >= 10 && idade < 20){
                //jovem
                image.setAttribute('src', 'img/young_male.jpg')
            } else if (idade < 50){
                //adulto
                image.setAttribute('src', 'img/adult_male.jpg')
            } else if (idade < 100){
                //idoso
                image.setAttribute('src', 'img/old_male.jpg')
            } else {
                image.setAttribute('src', 'img/skeleton.jpg')
            }


        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                image.setAttribute('src', 'img/kid_female.jpg')

            } else if (idade >= 10 && idade < 20){
                //jovem
                image.setAttribute('src', 'img/young_female.jpg')
            } else if (idade < 50){
                //adulto
                image.setAttribute('src', 'img/adult_female.jpg')
            }
            else if (idade < 100){
                //idoso
                image.setAttribute('src', 'img/old_female.jpg')
            } else {
                image.setAttribute('src', 'img/skeleton.jpg')
            }
        }

    resultado.innerHTML = `Você é um(a) ${genero} e tem ${idade} anos de idade.`
    resultado.appendChild(image)
    
        }


}