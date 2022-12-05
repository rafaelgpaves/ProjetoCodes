document.addEventListener('DOMContentLoaded', function() {

    aula1 = document.getElementById("aula1");
    aula2 = document.getElementById("aula2");
    aula3 = document.getElementById("aula3");
    aula4 = document.getElementById("aula4");
    if (localStorage.getItem("pergunta1") == "acertou") {
        aula2.href = "aula_2_criptomoeda.html";
        aula1.innerHTML = "Aula 1 - ✓✓"
    }
    if (localStorage.getItem("pergunta2") == "acertou") {
        aula3.href = "aula_3_criptomoeda.html";
        aula2.innerHTML = "Aula 2 - ✓✓"
    }
    if (localStorage.getItem("pergunta3") == "acertou") {
        aula4.href = "aula_4_criptomoeda.html";
        aula3.innerHTML = "Aula 3 - ✓✓"
    }
    if (localStorage.getItem("pergunta4") == "acertou") {
        aula4.innerHTML = "Aula 4 - ✓✓"
    }

    aula2.addEventListener("click", function() {
        if (localStorage.getItem("pergunta1") != "acertou") {
            alert("Complete as aulas anteriores!");
        }
    })
    aula3.addEventListener("click", function() {
        if (localStorage.getItem("pergunta2") != "acertou") {
            alert("Complete as aulas anteriores!");
        }
    })
    aula4.addEventListener("click", function() {
        if (localStorage.getItem("pergunta3") != "acertou") {
            alert("Complete as aulas anteriores!");
        }
    })

    })