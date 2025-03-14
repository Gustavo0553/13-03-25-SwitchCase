function colorir() { // cria a função para colorir
    document.body.bgColor = " #ffffff";
    document.body.style.color = " #000000";

    let txtCor = document.getElementById("txtCor");
    let cor = txtCor.value.toLowerCase(); // declara a variavel cor e pega em minusculo o valor digitado pelo txtCor

    switch (cor){ // o algoritimo switch vai procurar a cor e vai executar a troca de cor da página
        case "azul": // cria o interruptor azul  
            document.body.bgColor = " #0000ff"; // adiciona o código da cor azul que é 0000ff o ligando à palavra azul.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "vermelho": // cria o interruptor vermelho 
            document.body.bgColor = " #ff0000"; // adiciona o código da cor vermelho que é ff0000 o ligando à palavra vermelho.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "vermelha": // cria o interruptor vermelha 
            document.body.bgColor = " #ff0000"; // adiciona o código da cor vermelha que é ff0000 o ligando à palavra vermelha.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "roxo": // cria o interruptor roxo  
            document.body.bgColor = " #A020F0"; // adiciona o código da cor roxa que é A020F0 o ligando à palavra roxo.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "roxa": // cria o interruptor roxa  
            document.body.bgColor = " #A020F0"; // adiciona o código da cor roxa que é A020F0 o ligando à palavra roxa.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "laranja": // cria o interruptor laranja 
            document.body.bgColor = " #ff6f00"; // adiciona o código da cor laranja que é ff6f00 o ligando à palavra laranja.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "preto": // cria o interruptor preto
            document.body.bgColor = " #000000"; // adiciona o código da cor preta que é 000000 o ligando à palavra preto.
            document.body.style.color = " #ffffff";
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "preta": // cria o interruptor preta
            document.body.bgColor = " #000000"; // adiciona o código da cor preta que é 000000 o ligando à palavra preta.
            document.body.style.color = " #ffffff";
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "cinza": // cria o interruptor cinza 
            document.body.bgColor = " #8a8a8a"; // adiciona o código da cor cinza que é 8a8a8a o ligando à palavra cinza.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "marrom": // cria o interruptor marrom
            document.body.bgColor = " #593d28"; // adiciona o código da cor marrom que é 593d28 o ligando à palavra marrom.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "branco": // cria o interruptor branco
            document.body.bgColor = " #ffffff"; // adiciona o código da cor branca que é ffffff o ligando à palavra branco.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "branca": // cria o interruptor branca
            document.body.bgColor = " #ffffff"; // adiciona o código da cor branca que é ffffff o ligando à palavra branca.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "verde": // cria o interruptor verde
            document.body.bgColor = " #91ff00"; // adiciona o código da cor verde que é 91ff00 o ligando à palavra verde.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "rosa": // cria o interruptor rosa
            document.body.bgColor = " #ff00f7"; // adiciona o código da cor rosa que é ff00f7 o ligando à palavra rosa.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "amarelo": // cria o interruptor amarelo
            document.body.bgColor = " #ffea00"; // adiciona o código da cor amarela que é ffea00 o ligando à palavra amarelo.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "amarela": // cria o interruptor amarela
            document.body.bgColor = " #ffea00"; // adiciona o código da cor amarela que é ffea00 o ligando à palavra amarela.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "ciano": // cria o interruptor ciano
            document.body.bgColor = " #00ffdd"; // adiciona o código da cor ciana que é 00ffdd o ligando à palavra ciano.
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "ciana": // cria o interruptor ciana
            document.body.bgColor = " #00ffdd"; // adiciona o código da cor ciana que é 00ffdd o ligando à palavra ciana.
            break; // fecha o interruptor para não dar conflito com as outras cores
    } // fecha o bloco de código do switch cor
} // fecha o bloco de código da função colorir

function colorirTexto(){
    let txtCor2 = document.getElementById("txtCor2");
    let cor2 = txtCor2.value.toLowerCase();

    switch (cor2){
        case "azul": // cria o interruptor azul  
            document.body.style.color = " #0000ff" //muda a cor do texto para azul
            break;
        case "vermelho": // cria o interruptor vermelho 
            document.body.style.color = " #ff0000"; // muda a cor do texto para vermelho
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "vermelha": // cria o interruptor vermelha 
            document.body.style.color = " #ff0000"; // muda a cor do texto para vermelha
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "roxo": // cria o interruptor roxo  
            document.body.style.color = " #A020F0"; // muda a cor do texto para roxo
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "roxa": // cria o interruptor roxa  
            document.body.style.color = " #A020F0"; // muda a cor do texto para roxa
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "laranja": // cria o interruptor laranja 
            document.body.style.color = " #ff6f00"; // muda a cor do texto para laranja
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "preto": // cria o interruptor preto
            document.body.style.color = " #000000"; // muda a cor do texto para preto
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "preta": // cria o interruptor preta
            document.body.style.color = " #000000"; // muda a cor do texto para preta
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "cinza": // cria o interruptor cinza 
            document.body.style.color = " #8a8a8a"; // muda a cor do texto para cinza
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "marrom": // cria o interruptor marrom
            document.body.style.color = " #593d28"; // muda a cor do texto para marrom
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "branco": // cria o interruptor branco
            document.body.style.color = " #ffffff"; // muda a cor do texto para branco
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "branca": // cria o interruptor branca
            document.body.style.color = " #ffffff"; // muda a cor do texto para branca
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "verde": // cria o interruptor verde
            document.body.style.color = " #91ff00"; // muda a cor do texto para verde
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "rosa": // cria o interruptor rosa
            document.body.style.color = " #ff00f7"; // muda a cor do texto para rosa
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "amarelo": // cria o interruptor amarelo
            document.body.style.color = " #ffea00"; // muda a cor do texto para amarelo
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "amarela": // cria o interruptor amarela
            document.body.style.color = " #ffea00"; // muda a cor do texto para amarela
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "ciano": // cria o interruptor ciano
            document.body.style.color = " #00ffdd"; // muda a cor do texto para ciano
            break; // fecha o interruptor para não dar conflito com as outras cores
        case "ciana": // cria o interruptor ciana
            document.body.style.color = " #00ffdd"; // muda a cor do texto para ciana
            break; // fecha o interruptor para não dar conflito com as outras cores
            
    } // fecha o bloco de código do switch
} // fecha o bloco de códigos da função colorirTexto

document.getElementById("txtCor").addEventListener('keyup', function(event) {  // cria a função evento keyup 
    if (event.keyCode == 13) {  // cria o if evento keycode 13 (que e o enter)
        colorir(); // liga a função colorir ao evento keycode 13 fazendo com que o enter funcione
    } // fecha o bloco de código do if
}); // fecha o bloco de código da função evento, fecha o parentese da keyup.

document.getElementById("txtCor2").addEventListener('keyup', function(event) {  // cria a função evento keyup 
    if (event.keyCode == 13) {  // cria o if evento keycode 13 (que e o enter)
        colorirTexto(); // liga a função colorirTexto ao evento keycode 13 fazendo com que o enter funcione
    } // fecha o bloco de código do if
}); // fecha o bloco de código da função evento, fecha o parentese da keyup.