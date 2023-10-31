/* 
    Fundamentos de desenvolvimento web

    - definindo Objetos
*/

//  - definindo Objetos: 
const objSobrino = {
    nome: "Andre",
    idade: 19,
    foiAluno: true,

};

const arrayObjamigos = [
   {nome: "Peterson", idade: 32},
   {nome: "Kayky", idade: 38},
   {nome: "Lucas", idade: 23},
]

console.log(arrayObjamigos)

console.log(objSobrino)
console.log(objSobrino.nome)

objSobrino.nome = "Andre Nunes"

console.log(objSobrino.nome.length)





// JSON = JavaScript Object Notation ( notação de objetos do javascript) / é a maneira de ler um objeto em texto


const strJSON = JSON.stringify(arrayObjamigos);
console.log(strJSON);


const arrayobj = JSON.parse(strJSON)
console.log(arrayobj)