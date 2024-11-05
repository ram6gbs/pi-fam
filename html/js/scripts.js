function entrar() {
    alert("Entrando no aplicativo...");
  }
  
  function cadastrar() {
    alert("Redirecionando para cadastro...");
  }
  
  function esqueciSenha() {
    alert("Redefinir senha");
  }
  
  function adicionarAoCarrinho(item) {
    alert(item + " adicionada ao carrinho");
  }
  
  function finalizarPedido() {
    alert("Finalizando o pedido...");
  }
  
  function confirmarPagamento() {
    alert("Pagamento confirmado!");
  }
  
  function salvarEndereco() {
    alert("Endereço salvo!");
  }
  
  function confirmarPedido() {
    alert("Pedido confirmado!");
  }
  

  let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    alert(`${nome} adicionado ao carrinho!`);
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }
    
    alert("Pedido finalizado com sucesso!");
    console.log(carrinho);
   
    carrinho = [];
}