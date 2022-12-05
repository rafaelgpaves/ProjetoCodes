document.addEventListener('DOMContentLoaded', function() {

    li_cap = document.createElement('li');
    h3_cap = document.createElement('h3');
    li_cap.appendChild(h3_cap);

    li_cap_val = document.createElement('li');
    p_cap_val =document.createElement('p');
    li_cap_val.appendChild(p_cap_val);

    li_desp = document.createElement('li');
    h3_desp = document.createElement('h3');
    li_desp.appendChild(h3_desp);

    li_mon_val = document.createElement('li');
    p_mon_val = document.createElement('p');
    li_mon_val.appendChild(p_mon_val);

    li_rent = document.createElement('li');
    p_rent=  document.createElement('p');
    li_rent.appendChild(p_rent);

    li_rent.classList.add('submit');
    li_cap.classList.add('submit');
    li_desp.classList.add('submit');
    li_mon_val.classList.add('submit');



    
    escondert =  document.querySelectorAll('.escondert');
    
    
    esca=  document.querySelectorAll('.esca');

    

   
    main= document.querySelector('.texto_simulador');
    main.appendChild(li_cap );
    main.appendChild(li_cap_val);
    main.appendChild(li_desp);
    main.appendChild(li_mon_val);
    main.appendChild(li_rent);


    sub_in = document.getElementById('inicial');
    sub_tem = document.getElementById('tempo');
    sub_at = document.getElementById('ativo');






    sub_in.addEventListener("click", function() {
        cap_in = document.getElementsByTagName("input")[0].value;
        if (cap_in ==''){
            alert("Nada foi selecionado, defina um invetimento inicial");

        }
        else{
            cap_in = parseFloat(cap_in);
            for (esc of escondert){
                esc.classList.remove('escondert');
    
            }

        }
        
        

        

    });


    sub_tem.addEventListener("click", function() {
        try {
            tempo_sel = document.querySelector('input[name="tempo"]:checked').value;
            for (ea of esca){

                ea.classList.remove('esca');

            }
                
        }
        // se não der certo o bloco try, vai entrar no catch, se a pessoa não tiver escolhido nenhuma opção
        catch {
          
            alert("Nada foi selecionado, defina um tempo");
        }

    });
    sub_at.addEventListener("click", function() {
        try {
            at_sel = parseFloat(document.querySelector('input[name="ativo"]:checked').value);
            m = cap_in*((1+at_sel)**tempo_sel);
            rent = (((1+at_sel)**tempo_sel)-1)*100;
            h3_cap.innerHTML = 'Capital inicial' ;  
            p_cap_val.innerHTML = 'R$'+String(cap_in);
            h3_desp.innerHTML = 'Despois de "' + String(tempo_sel)+ '"anos';
            p_mon_val.innerHTML='R$'+String(m.toFixed(2));
            p_rent.innerHTML = 'Rentabilidade de '+String(rent.toFixed(2)) + '%';

                
        }
        // se não der certo o bloco try, vai entrar no catch, se a pessoa não tiver escolhido nenhuma opção
        catch {
            alert("BRUH");
        }

    });




})