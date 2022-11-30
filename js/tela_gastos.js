document.addEventListener('DOMContentLoaded', function() {
setInterval(function(){


    economias = document.getElementById("economias").value
    transporte = document.getElementById("transporte").value
    seguro = document.getElementById("seguro").value
    entretenimento = document.getElementById("entretenimento").value
    comida = document.getElementById("comida").value
    casa = document.getElementById("casa").value

    let ctx = document.querySelector("canvas").getContext("2d")

    const results = [
    {investimetno : "economias", total: parseInt(economias), shade:"#fc16a1"},
    {investimento : "transporte", total: parseInt(transporte), shade:"#5cfca1"},
    {investimento : "seguro", total: parseInt(seguro), shade:"#5c92a1"},
    {investimento : "entretenimento", total: parseInt(entretenimento), shade:"#5c9200"},
    {investimento : "comida", total: parseInt(comida), shade:"#5c0000"},
    {investimento : "casa", total: parseInt(casa), shade:"#ff0000"}
    ]
    console.log(results)
    let sum = 0;
    let totalNumberOfPeople = results.reduce((sum, {total}) => sum + total, 0);
    let currentAngle = 0;

    for (let investimentoValue of results) {
    
        let portionAngle = (investimentoValue.total / totalNumberOfPeople) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
        currentAngle += portionAngle;
        ctx.lineTo(100, 100);

        ctx.fillStyle = investimentoValue.shade;
        ctx.fill();
    }
    }, 1000)

})