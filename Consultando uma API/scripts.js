
let album = JSON.parse(localStorage.getItem('album')) || []

      //pegar imagen da API
      
async function pegarImagenDaApi() {
   const response = await fetch('https://source.unsplash.com/random')
   document.querySelector('.image')
      .innerHTML = `<img src="${response.url}">`
}

pegarImagenDaApi()


//clicar para pegar imagen da API

document.querySelector('button').onclick = function () {
   pegarImagenDaApi()
}

      //clicar na imagem, para salvar ou remover do localStore

document.querySelector('.image').onclick = function () {
   const imageContainer = document.querySelector('.image')
   const imageSource = document.querySelector('.image img').src

      // remover se esta

   const index = album.indexOf(imageSource)
   const existsInLocalStorage = index != -1
   if (existsInLocalStorage) {
      album.splice(index, 1)
      imageContainer.classList.remove('alb')
   } else {
      //salvar se não esta
      album.push(imageSource)
      imageContainer.classList.add('alb')

   }

   localStorage.setItem('album', JSON.stringify(album))

}


