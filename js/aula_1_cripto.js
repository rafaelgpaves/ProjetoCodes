document.addEventListener('DOMContentLoaded', function() {



    // codigo para aula_1_criptomoeda.html:
    e = document.querySelector(".submit");
    if (localStorage.getItem("pergunta1") == "acertou") {
        p = document.getElementById("feedback1");
        p.innerHTML = "Parabéns, você já acertou a pergunta! A resposta certa era Bitcoin";
        e.remove();
        resposta_certa = document.getElementById("resposta");
        resposta_certa.style.border = "0.1rem solid #3a5d69";
    } else if (localStorage.getItem("pergunta1") == "errou") {
        p = document.getElementById("feedback1");
        p.innerHTML = "Essa não é a resposta certa. Reveja o vídeo e tente novamente";
    }
    e.addEventListener("click", function() {
        try {
            resposta = document.querySelector('input[name="pergunta1"]:checked').value;
            console.log(resposta);
            if (resposta == "Bitcoin") {
                console.log("OK");
                localStorage.setItem("pergunta1", "acertou");
            } else {
                console.log("Errou");
                localStorage.setItem("pergunta1", "errou");
            }
        }
        // se não der certo o bloco try, vai entrar no catch, se a pessoa não tiver escolhido nenhuma opção
        catch {
            alert("BRUH");
        }

    });



    })