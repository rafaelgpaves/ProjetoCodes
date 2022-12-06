document.addEventListener('DOMContentLoaded', function() {
    setInterval(function(){


        economias = document.getElementById("economias").value;
        transporte = document.getElementById("transporte").value;
        seguro = document.getElementById("seguro").value;
        entretenimento = document.getElementById("entretenimento").value;
        comida = document.getElementById("comida").value;
        casa = document.getElementById("casa").value;

        let ctx = document.querySelector("canvas").getContext("2d")

        const results = [
        {investimetno : "economias", total: parseInt(economias), shade:"#fc16a1"},
        {investimento : "transporte", total: parseInt(transporte), shade:"#5cfca1"},
        {investimento : "seguro", total: parseInt(seguro), shade:"#5c92a1"},
        {investimento : "entretenimento", total: parseInt(entretenimento), shade:"#5c9200"},
        {investimento : "comida", total: parseInt(comida), shade:"#5c0000"},
        {investimento : "casa", total: parseInt(casa), shade:"#ff0000"}
        ]
        let sum = 0;
        let totalNumberOfPeople = results.reduce((sum, {total}) => sum + total, 0);
        let currentAngle = 0;

        for (let investimentoValue of results) {
        
            let portionAngle = (investimentoValue.total / totalNumberOfPeople) * 2 * Math.PI;
            
            ctx.beginPath();
            ctx.arc(52*1.3, 52*1.3, 50*1.3, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            ctx.lineTo(50*1.3, 50*1.3);

            ctx.fillStyle = investimentoValue.shade;
            ctx.fill();
        }

        // const data = {
        //     labels: ["Economias", "Transporte", "Seguro", "Entretenimento", "Comida", "Casa"],
        //     dataset: [{
        //         data: [parseInt(economias), parseInt(transporte), parseInt(seguro), parseInt(entretenimento), parseInt(comida), parseInt(casa)],
        //         backgroundColor: [
        //             "#fc16a1",
        //             "#5cfca1",
        //             "#5c92a1",
        //             "#5c9200",
        //             "#5c0000",
        //             "#ff0000"
        //         ],
        //         hoverOffset: 4,
        //     }]
        // };
        // const config = {
        //     type: "pie",
        //     data: data,
        // };
        

        categorias = ["Economias", "Transporte", "Seguro", "Entretenimento", "Comida", "Casa"];
        gastos = [parseInt(economias), parseInt(transporte), parseInt(seguro), parseInt(entretenimento), parseInt(comida), parseInt(casa)];
        index = (element) => element === element;
        maiores_gastos = "";
        let i = 0;
        while (i < categorias.length) {
            if (gastos[i] == Math.max(...gastos)) {
                maiores_gastos = maiores_gastos + " " + categorias[i];
            }
            i++;
        }
        maiorgasto = document.getElementById("maiorgasto");
        maiorgasto.innerHTML = "Seus maiores gastos foram na(s) área(s) de:" + maiores_gastos;

        aviso = document.getElementById("aviso");
        saida = document.getElementById("saida").value;
        if(saida == "entretenimento") {
            aviso.innerHTML = "Cuidado, você já gastou " + entretenimento + " reais em entretenimento neste mês. No mês passado, você gastou 100 reais nisso";
        } else if (saida == "comida") {
            aviso.innerHTML = "Cuidado, você já gastou " + comida + " reais em comida neste mês. No mês passado, você gastou 150 reais nisso";
        }

    }, 1000)

})