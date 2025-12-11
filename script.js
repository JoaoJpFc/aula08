// console.log("OK");

// Objeto que armazena os dados do cliente
const cliente = {
  nome: document.querySelector("#nome-cliente"),
  cpf: document.querySelector("#cpf"),
  formulario: document.querySelector("#form-cliente"),
};

// Objeto que armazena os dados do endereço
const endereco = {
  cep: document.querySelector("#cep"),
  logradouro: document.querySelector("#logradouro"),
  numero: document.querySelector("#numero"),
  complemento: document.querySelector("#complemento"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  uf: document.querySelector("#uf"),
};



// Adiciona um "ouvinte" para capturar o disparo do evento de submit do formulário
cliente.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  consultarCEP(cep.value);
});

// Função que faz a busca do CEP digitado
async function consultarCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  // Variável do tipo objeto para receber os dados do CEP do usuário
  const dadosDoCEP = {
    logradouro: resposta.logradouro,
    complemento: resposta.complemento,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    uf: resposta.uf,
  };
  console.log(dadosDoCEP);
  // return dadosDoCEP;
  inserirEndereco(dadosDoCEP)
}

//Função para receber os dados do CEP e insere o valor dos inputs
function inserirEndereco(dadosDoCEP){
        endereco.logradouro.value = dadosDoCEP.logradouro
        endereco.cidade.value = dadosDoCEP.cidade
        endereco.numero.value = dadosDoCEP.numero
        endereco.complemento.value = dadosDoCEP.complemento 
        endereco.uf.value = dadosDoCEP.uf
        endereco.bairro.value = dadosDoCEP.bairro

}

// Objeto que armazena os dados dos produtos
const produtos = {
   nome: document.querySelector("#produto"),
    quantidade: document.querySelector("#quantidade"),
     valor: document.querySelector("#preco"),
     formulario: document.querySelector("#form-produto"),
     lista: [],
};
// Adiciona um "ouvinte" para capturar o disparo do evento de submit do formulário

produtos.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  let item ={
    quantidade: produtos.quantidade.value,
    nome: produtos.nome.value,
    valor: produtos.valor.value,
    soma: produtos.quantidade.value * produtos.valor.value, 
  }

  listaProdutos(item);


});
//Função para inserir nome, quantidade e preco do produto no objeto "produtos.lista" (array)
function listaProdutos(item){
  produtos.lista.push(item);
  console.log(produtos.lista);
}

