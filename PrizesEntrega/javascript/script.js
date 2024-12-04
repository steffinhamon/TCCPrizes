var menumobile = document.querySelector(".mobile-menu")
var links = document.querySelector('.menu2')

function menu_abrir()
{


    if(links.style.display == 'none')
    {

        links.style.display = 'block'

    }
    else
    {

        links.style.display = 'none'

    }


}

function tamanho ()
  {

    if (window.innerWidth >= 759) {
      
      links.style.display = 'none'

    }else
    {

      links.style.display = 'block'

    }

  }



  // Chama a função para inicializar os favoritos quando a página carregar
document.addEventListener('DOMContentLoaded', initializeFavorites);

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

    window.onload = function() {
        const linha = document.querySelector('.linha-horizontal');
        const titulo = document.querySelector('.titulo');
        
        linha.classList.add('loaded'); 
        titulo.classList.add('loaded'); 
    };



