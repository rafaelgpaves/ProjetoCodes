document.addEventListener('DOMContentLoaded', function() {
    dici = localStorage;
    img = document.querySelector('.trofeus');
    console.log(img.getAttribute('src'));
    
    certificado = document.querySelector(".fig_certificado");
    certificado.addEventListener('click', function(event){
        dici.setItem('certificado_bmd', 'completo');
    })
    console.log(dici.getItem('certificado_bmd'));
   
    // if (dici.getItem('certificado_bmd') == 'completo') {
    //     fig_main_index = document.querySelector('.center fig_tro');
  
    //     fig_tro= document.createElement('img');
    //     fig_tro.src = "img/trofeu_desbloqueado.png";
    //     fig_tro.alt='trofeu_desbloqueado';
    //     fig_tro.classList.add("trofeus");
    //     fig_main_index.appendChild(fig_tro);

    // }

    })