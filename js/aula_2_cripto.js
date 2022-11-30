document.addEventListener('DOMContentLoaded', function() {

    a = document.getElementById("proximo");
    a.style.color = "#3a5d69";
    a.style.textDecoration = "none";

    e = document.querySelector(".submit");
    e.addEventListener("click", function() {
        try {
            p = document.getElementById("feedback2");
            resposta = document.querySelector('input[name="pergunta2"]:checked').value;
            console.log(resposta);
            if (resposta == "dezmil") {
                localStorage.setItem("pergunta2", "acertou");
                p.innerHTML = "Parabéns, você já acertou a pergunta! A resposta certa era Bitcoin";
                e.remove();
                resposta_certa = document.getElementById("resposta");
                resposta_certa.style.border = "0.1rem solid #3a5d69";

                a.href = "aula_3_criptomoeda.html";
                a.style.color = "#19c6ff";
                a.innerHTML = "Clique aqui para ir para a próxima aula";
            } else {
                localStorage.setItem("pergunta2", "errou");
                p.innerHTML = "Essa não é a resposta certa. Reveja o vídeo e tente novamente";
            }
        }
        // se não der certo o bloco try, vai entrar no catch, se a pessoa não tiver escolhido nenhuma opção
        catch {
            p = document.getElementById("feedback2");
            p.innerHTML = "Escolha alguma resposta!";
        }

    });

    if (localStorage.getItem("pergunta2") == "acertou") {
        p = document.getElementById("feedback2");
        p.innerHTML = "Parabéns, você já acertou a pergunta! A resposta certa era Bitcoin";
        e.remove();
        resposta_certa = document.getElementById("resposta");
        resposta_certa.style.border = "0.1rem solid #3a5d69";

        a.href = "aula_3_criptomoeda.html";
        a.style.color = "#19c6ff";
        a.innerHTML = "Clique aqui para ir para a próxima aula";
    }

    })