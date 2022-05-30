let meuNome = 'Jeffrey';
let meuSobreNome = 'Rodrigues';
let minhaProfissao = 'Desenvolvedor Back End';

//sem template-string
console.log('Olá, eu sou ' + meuNome + ' ' + meuSobreNome + ' minha profissão é: ' + minhaProfissao);

//com template-string
console.log(`Olá, meu nome é ${meuNome} ${meuSobreNome} e minha profissão é: ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 1 = ${1 + 1} `);
console.log(`O objeto json ${{ chave: 'valor' }}`);

let meuObjeto = {
  chave: 'novo valor'
}