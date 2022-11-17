document.addEventListener('DOMContentLoaded', function() {




    // codigo para aula_1_criptomoeda.html
    e = document.querySelector(".submit");
    e.addEventListener("click", function() {
        resposta = document.querySelector('input[name="pergunta1"]:checked').value;
        console.log(resposta);
        if (resposta == "Bitcoin") {
            console.log("OK");
        } else if (resposta == "") {
            alert("BRUH")
        }
    });

    
    })