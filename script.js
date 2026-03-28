function carregar(){
    var msg =  document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg(`Agora são ${hora}horas`)
    var hora = 16
    if(hora >= 0 && hora < 12 ){
        //BOM DIA
        img.src = 'manha.png'
    }else if (hora >= 12 && hora< 18){
        //Tarde
        img.src = 'tarde2.png'
    }else{
        //boa noite!
        img.src = 'noite.png'
    }
}
