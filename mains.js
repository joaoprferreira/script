// Passo a Passo
    //  *Criar variaveis 
    // 1. Desenhar lista
    // 2. Adicionar Elemento
    // 3. Remover Elemento

    let lista = ["Breno", "Alan", "Fred"];
    console.log(lista.length);

    desenharLista();

    let btnAdicionar = document.getElementById("btn-adicionar");

    btnAdicionar.addEventListener("click", function(){
        let inputItem = document.getElementById("input");

        adicionarItem(inputItem.value);
        desenharLista();
    })


    // Funções da Lista 

    function adicionarItem(item){
        lista.push(item);
    }

    function removerItem(itemIndice){
        lista.splice(itemIndice, 1);
        desenharLista();
    }

    function desenharLista(){
        let listaElement = document.getElementById("lista");

        let elementos = "";
        
        for(let i = 0; i < lista.length; i++ ){
            elementos = elementos + 
            `<li> ${lista[i]} 
                <button onclick="removerItem(${i})" class="btn-delete">X</button>
            </li>`;
        }

        for (variavel; condição ; adicional/complemento) {
            const element = array[index];
            
        }

        listaElement.innerHTML = elementos;
    }