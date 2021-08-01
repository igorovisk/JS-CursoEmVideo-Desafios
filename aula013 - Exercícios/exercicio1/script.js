function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora}:${min}.`
        image.src = 'img/manha.png'
        document.body.style.backgroundColor = 'rgb(253, 230, 23)'
    } else if (hora > 12 && hora < 19){
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}.`
        image.src = 'img/tarde.png'
        document.body.style.backgroundColor = 'rgb(253, 192, 23)'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}:${min}.`
        image.src = 'img/noite.png'
        document.body.style.backgroundColor = 'rgb(85, 41, 0)'
    }
}



