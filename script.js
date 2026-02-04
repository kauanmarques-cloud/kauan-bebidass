let total = 0;

// Guarda os itens do pedido
const pedido = {};

const listaPedido = document.getElementById("lista-pedido");
const totalSpan = document.getElementById("total");

const botaoFinalizar = document.getElementById("finalizar");

botaoFinalizar.addEventListener("click", (e) => {
    e.preventDefault(); // impede envio do formulário
    window.location.href = "checkout.html";
});


function adicionar(nome, preco) {

    // Se o item ainda não existe, cria
    if (!pedido[nome]) {
        pedido[nome] = {
            preco: preco,
            quantidade: 0
        };
    }

    // Soma quantidade
    pedido[nome].quantidade++;

    atualizarLista();
}

function remover(nome) {
    pedido[nome].quantidade--;

    // Se zerar, remove o item
    if (pedido[nome].quantidade <= 0) {
        delete pedido[nome];
    }

    atualizarLista();
}

function atualizarLista() {
    listaPedido.innerHTML = "";
    total = 0;

    for (let nome in pedido) {
        const item = pedido[nome];
        const subtotal = item.preco * item.quantidade;

        total += subtotal;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>
                ${item.quantidade}x ${nome} — R$ ${subtotal.toFixed(2)}
            </span>
            <button class="excluir">X</button>
        `;

        li.querySelector(".excluir").addEventListener("click", () => {
            remover(nome);
        });

        listaPedido.appendChild(li);
    }

    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

botaoFinalizar.addEventListener("click", () => {
    if (total === 0) {
        alert("Nenhum item no pedido.");
    } else {
        alert(`Pedido finalizado com sucesso!\nTotal: R$ ${total.toFixed(2)}`);

        // Limpa tudo
        for (let item in pedido) {
            delete pedido[item];
        }

        atualizarLista();
    }
});





botaoConfirmarPedido.addEventListener("click", () => {
    if (total === 0) {
      
    } else {
        alert(`Pedido finalizado com sucesso!\nTotal: R$ ${total.toFixed(2)}`);

        // Limpa tudo
        for (let item in pedido) {
            delete pedido[item];
        }

        atualizarLista();
    }
});




