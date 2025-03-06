let totalGeral;
limpar();

function adicionar() {
    // Pegar o valor do input produto
    let produto = document.querySelector('#produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];
    let quantidadeProduto = document.querySelector('#quantidade').value;
    let valorTotalProduto = Number(quantidadeProduto) * Number(valorDoProduto);    

    // Adicionar o produto no carrinho
    let carrinhoProdutos = document.querySelector('#lista-produtos');
    carrinhoProdutos.innerHTML += 
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
         </section>`;

    totalGeral += valorTotalProduto;
    let campoTotal = document.querySelector('#valor-total');
    campoTotal.textContent = `R$${totalGeral}`;    
    document.querySelector('#quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$${totalGeral}`;
}