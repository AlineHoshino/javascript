function imc (peso,altura){
    return peso/(altura*altura)
}

// Crie uma função para verificar se um valor é Truthy

const verifyValue = (param) => {
return !!param
}

console.log(verifyValue(0))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
const perimetro = (l1,l2,l3,l4) => {
 return l1 +l2 +l3 +l4
}
console.log(perimetro(2,2,2,2))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto (nome, sobrenome) {
 return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('aline', 'eiko'))
// Crie uma função que verifica se um número é par
function isPar(num){
if(num %2 ===0){
    return 'par'
}else {
    return 'impar'
}
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function types(param){
    return typeof param
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
    console.log('Aline Hoshino')
})
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  