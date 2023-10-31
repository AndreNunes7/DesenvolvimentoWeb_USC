/*
--------------------------------------
    Fundamentos de Desenvolvimento Web
    JavaScript

*/


// Arrays em JS 

const amigos = ["Kayky", "Peterson", "Gustavo", "Murilo"];


    

const arrayVariado = [5, "Unisanta", true, 5.5]

console.log(amigos);
console.table(amigos) // Tabela com todos os "Amigos", enumerados
console.log(typeof(amigos))
console.log("Amigos[0]:",amigos[0])
console.log("Elementos:", amigos.length);
console.log("arrayVariado[0]: ", typeof(arrayVariado[0]))


let x = arrayVariado[0]
console.log("X:", x)

// maneira ruim: 
//profs[500] = "Guerra" // neste caso ele ira colocar o elemento "Guerra" na posição 500 porem se o array n tiver os elementos do 0 a 499 ele ira ocupar os valores

let y = amigos[5]
console.log("y:", y)


// metodos de array: 

amigos.unshift("Guerra"); // Adiciona um elemento no inicio do array , deslocando os demais elementos para a direita

amigos.push("Claudio Nunes");  // adiciona um elemento no final do array

amigos.shift(); // Exclui o elemento do inicio do array

amigos.pop() // apaga o ultimo elemeto do array

amigos.splice(0, 1) // apaga o elemento de acordo com o indice que voce passar

amigos.splice(5, 0, "Ana") // a partir do elemento(indice) 5, (0) - nao ira apagar / qntos quer apagar - ira adicionar "ana"

amigos.sort();  // Ordena o array



console.log(amigos)


for (i=0; amigos.length >= i ; i++){
    console.log(amigos[i])
}



// Funçao de Callback:

//Callback = Uma funçao dentro da outra / pode ser usada para fazer descompactar um array

amigos.forEach(element => {
    console.log(element);
});
