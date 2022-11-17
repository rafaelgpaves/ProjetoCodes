document.addEventListener('DOMContentLoaded', function() {




    // codigo para aula_1_criptomoeda.html:
    e = document.querySelector(".submit");
    e.addEventListener("click", function() {
        try {
            resposta = document.querySelector('input[name="pergunta1"]:checked').value;
            console.log(resposta);
            if (resposta == "Bitcoin") {
                console.log("OK");
            } else {
                console.log("Errou")
            }
        }
        // se nãoo der certo o bloco try, vai entrar no catch, se a pessoa não tiver escolhido nenhuma opção
        catch {
            alert("BRUH")
        }
                 
    });

    })