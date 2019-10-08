/**
 * Brendan Eich - considerado o criador da linguagem.
 * 
 * javaScript é uma linguagem de tipagem dinâmica.
 * 
 * Versão atual ECMAScript 2018.
 * 
 * Linguagem case sensitive - diferencia letras maiúsculas de minúsculas.
 * 
 * obs.: Esse tipo de comentário geralmente é usado pra documentação.
 * 
 */

// Comentário de uma linha

/*
Comentários de múltiplas linhas
aaaaa
bbbbb
ccccc
*/

//Variáveis - são declaradas com o comando 'let' ou 'var'.
let name = 'Paulo.js'; // aspas duplas ou simples.
var age = 34; // O ponto e vírgula é opcional.

//Valor constante - É declarado com o comando 'const'.
const cpf = '000.000.000-00'; // Usa-se quando se declara um valor que não mudará.


/* 
Você pode encontrar a documentação do javaScript no site da MDN
link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
*/

/*
JavaScript é mantido pela ECMA.
javaScript é a mesma coisa que ecman script
javaScript é diferente de java.
*/

//Tipos primitivos de dados em javaScript
/* 
string
number
boolean
null
undefined
symbol
*/

// Escreve no documento html.
document.write("HelloWorld"); // Chamamos esse tipo de escrita de CamelCase.


//Mostrar no console do browser(navegador).
console.log('HellWorld')


//Pra saber o tipo do dado, se tratando de tipos primitivos, usamos o comando typeof
let myName = 'Paulo';

//Esse comando lhe dirá qual o tipo do dado que está na variavel
console.log(typeof myName);
//Lembrando que só serve pra tipos primitivos de dado.