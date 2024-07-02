function carregar(){
    var data = new Date
    var hora = data.getHours()
    var txt = document.getElementById('msg')
    var img = document.createElement('img')
    var foto = document.getElementById('foto')
    var fundo = document.body

    if(hora < 12){
        //bom dia
        txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>. Bom dia!</p>`
        img.src = 'manha.jpg'
        fundo.style.backgroundColor = '#ddd5c0'
    } else if(hora < 18){
        //boa tarde
        txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>. Boa tarde!</p>`
        img.src = 'tarde.jpg'      
        fundo.style.backgroundColor = '#f9e8a6'  
    } else{
        //boa noite
        txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong>. Boa noite!</p>`
        img.src = 'noite.jpg'
        fundo.style.backgroundColor = '#141f41'
    }
    foto.appendChild(img)
}

