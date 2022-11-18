document.addEventListener('DOMContentLoaded', function() {
    chamador = document.querySelector(".submitar");
    chamador.addEventListener("click", function(){
    valor_investido = document.querySelector('.valor_a_simular').value;
    localStorage.setItem("valor_investido", valor_investido);

    try { 
        quase_simulando = document.getElementById("SIMULA_DECIDIR");
        quase_simulando.appendChild(localStorage.getItem("valor_investido"));
        console.log(quase_simulando)
    }
    catch {
        alert("amongus")
    }
    
    })
})