document.addEventListener('DOMContentLoaded', function() {
    
    img = document.querySelector('.trofeus');

    if (localStorage.getItem('certificado_bmd') == 'completo') {
        fig_main_index = document.querySelector('.fig_tro');
        fig_tro= document.createElement('img');
        fig_tro.src = img.getAttribute('src');
        fig_tro.classList.add("trofeus");
        fig_main_index.appendChild(fig_tro);

    }

    })