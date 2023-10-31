"use strict";  // impede o JS de deduzir qual a variavel ou usar uma variavel que nao declarou o tipo
//   Ctrl ,  + clear output 



//  -> comentario de uma unica linha

/* 
    --> comentario de multiplas linhas
*/ 



/* 
    -----------------------------------
    Fundamentos de Desenvolvimento web
    -----------------------------------

*/


/* 
    -------------------
    Tipos de variaveis 
    -------------------

    var = ( tem escopo global)
    let =  ( escopo local ) variavel cujo valor é mantido apenas no local onde ela está
    const = é uma variavel de valor constante (não se altera)

    quando nao declarar a variavel, o javascript deduz qual é o tipo isso é chamado de Hoistring
*/


/* 
- Undefined = Variavel sem valor
*/


/* 
    ---------------------------------
    Operadores relacionais e logicos
    ---------------------------------

    ( === ) -  significa estritamente igual

*/


console.log("Hello world");


var a, b, c;
let x=1, y=10;
const resp = "n";
// resp ="s";


a = 1;
b = 3;
c = a + b;

console.log("O resultado é:", c)


if (y == 10){               // escopo de bloco ( local )
    let x;
    x = 5;

    console.log("O valor de X é: ", x)
};


console.log("O valor de X é: ", x)



// Ex01


const nome = "Andre";

let idade = 19;

let vcAluno = true

let altura;


console.log("Meu nome é ", typeof(nome) + " tenho ", typeof(idade), " anos e sou aluno?=",typeof(vcAluno)," Altura: ",typeof(altura));


// Ex02

let p1 = 5.5;
let p2 = 4.5;

let conta = (p1 + p2 * 2) / 3


// template literals

console.log(`A partir das nota: ${p1} e ${p2} a media do aluno é ${conta.toFixed(1)}\n(${typeof(conta)})`)   // to.fixed = delimita as casas decimais apos a virgula



// Ex3


let string1, string2, num1, num2, bool1,bool2;

string1 = "a";
string2 = "b";
num1 = 10;
bool1 = true
bool2 = false


let conta3 = string1 + string2
let conta4 = string1 + num1 
let conta5 = num1 + num2
let conta6 = bool1 + bool2

console.log(`string + string: ${conta3}`)
console.log(`string + numero: ${conta4}`)
console.log(`numero + null: ${conta5}`)
console.log(`booleano + booleano: ${conta6}`)


let x1 = "1", y2 = 2;

console.log(x1 * y2)


// teste expressoes:


console.log(3 >= 3);
console.log(3 === 2);
console.log(2 == "2");
console.log(5 == 7 && 3 > 1);
console.log(!3>3 || 5 * 3 === 2);


// Ex 4



let media = 1.2;

if (media >= 5){
    if (media >= 9){
        console.log("Aluno aprovado")
        console.log("Conceito A")
    }else if (media > 7 ) {
        console.log("Aluno aprovado")
        console.log("Conceito B")
    }else if (media > 5) {
        console.log("Aluno aprovado")
        console.log("Conceito C")
    }
    
}
else if (media > 2){
    console.log("Aluno reprovado!")
    console.log("Conceito D")
}else {
    console.log("Aluno reprovado!")
    console.log("Conceito E")
}



// media conceito 

