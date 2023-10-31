/* 
----------------------------------------
    Fundamentos de Desenvolvimento Web
    Aula-2 Javascript
-----------------------------------------

*/




console.log("Hello World!")


// Declaração de fnção

function media(nota1=0, nota2=0 ) // parametro default ex: nota=0 
{
    

    let media_calc = (nota1 + nota2 * 2) / 3;
    if ( media_calc < 5) {

        console.log(`Voce foi reprovado sua nota foi: ${media_calc.toFixed(1)}`)
    }
    else {
        console.log(`Voce foi aprovado sua nota foi: ${media_calc.toFixed(1)}`)
    }
    
    return media

};

let mediaQuartoAluno = media(5, 5);

console.log("a media do aluno 4 é ", mediaQuartoAluno)



// Expressão de função:


let soma = function (n1=0, n2=0){ // a função pode ou nao ter nome
    return n1 + n2;
}

console.log(soma(2, 3));

console.log()





// Ex 01

console.log("While:")

function contWhile(){

    let num = 10;

    while (num > -1 ){
        console.log(num--)
    }
    
    

}


contWhile()

console.log()
console.log("FOR:")



function contFor(){
 

    for (i=0; i<=10; i++)
    {
        console.log(i)
    }
    
}




contFor();
console.log();
console.log("DO WHILE: ")

doWhile = function doWhile(){
    let num2 = 0;

    do {
        console.log(num2)
        num2 += 2

        
    }
    while ( num2 <= 20){
        
    }
    
}



doWhile()
console.log()


// Ex 02:

console.log("Par Ou Impar:");

let parOuImpar = function parOuImpar(num){
    if (num % 2 == 0){
        return "Par";
        
    }else{
        return "Impar";
    }
}


console.log()

parOuImpar(2);



// Arrow Function / Funçao lambda em JS

let ParOuImparV2 = n => (n%2==0) ? "Par" : "Impar";

ParOuImparV2(2);