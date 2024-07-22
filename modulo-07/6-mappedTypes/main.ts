{/*

       Mapped Types

       obter um modelo existente
       transformar cada propriedade num novo tipo 
       permanecer sicronizado com outro tipo

       type MappedTypeName = {[K in UnionType]: ExistingType}

*/}
export {}

// ==> Exemplo 01: Mapped Types
console.log(`\n\t==> Exemplo 01\n`);

type Usuario = {
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
};

type UsuarioOpcional = {
  nome?: string;
  endereco?: string;
  telefone?: string;
  idade?: number;
};

// type UsusarioSomenteLeitura = {
//   readonly nome: string;
//   readonly endereco: string;
//   readonly telefone: string;
//   readonly idade: number;
// };

// { [P in K]: T }

type UsuarioMappedType = {
  [P in keyof Usuario]?: Usuario[P]; // for in //varredura
};

const usuarioMapped: UsuarioMappedType = {
  nome: 'Glaucia Lemos',
  endereco: 'Rua 01, 123',
}

console.log(usuarioMapped);

// ==> Exemplo 02: Outros Tipos Avançados

interface Livro {
  titulo: string;
  autor: string | null;
  preco: number;
  numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;//vai omitir a propriedade


type LivroModelo = Readonly<Livro>; // as propriedade são apenas de leitura(readonly) no type LivroModelo

const livro: LivroModelo = {
  autor: 'Boris Cherny',
  numeroPaginas: 324,
  preco: 19.99,
  titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
}
   

// livro.titulo = 'text 002'; //não é possivel


   


