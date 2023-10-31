/* 
    Fundamentos de Desenvolvimento WEB
    Aula 05

*/

// Array em JS é um objeto!


const arrayAmigos = [];

arrayAmigos.unshift("Avelino", "Guerra", "Rangel", "Guerra")

console.log(arrayAmigos);
// console.table(arrayAmigos); 



let amigoProcurado = arrayAmigos.indexOf("Rangel") // [ indexOf] = Procura pelo indice  / indice negativo caso nao tenha o indice procurado no array ex: -1


console.log("Ranguel esta no array?: ", amigoProcurado);

// [ include() ] - retorna um verdadeiro caso exista o elemento no array
