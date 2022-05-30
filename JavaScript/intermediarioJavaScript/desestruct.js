const pessoa = {
  nome: 'Jeffrey',
  sobrenome: 'Rodrigues',
  idade: 19,
  profissao: 'Jornalista'
};

console.log(pessoa);

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao; */

let { nome, idade, profissao } = pessoa;

console.log(nome, idade, profissao);