let custoProduto = "222";
let valorProduto = "2222";

if (custoProduto > 0 && valorProduto > 0) {
    let lucroLiquido = (valorProduto - custoProduto) * (1 - 0.2);
    console.log(1000 * lucroLiquido);
} else {
    console.log("ERRO VENDA")
}