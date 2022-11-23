document.addEventListener('DOMContentLoaded', function() {
    certificado = document.querySelector(".fig_certificado");
        certificado.addEventListener('click', function(event){
            localStorage.setItem('certificado_bmd', 'completo');
        })
})