var nome = '';

if(nome){
  console.log(nome)
}else {
  console.log('Nome não existe')
}

var OneCharactr = ' ';
if(OneCharactr){
  console.log(true)
} else {
  console.timeLog(false)
}

if((5-5) && (5+5)) {
  console.log('Verdadeiro')
}else {
  console.log('false')
}

var corFavorita = "Azul";

switch(corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
  break;
  case 'Amarelo':
    console.log('Olhe para o Sol');
    break;
  default:
    console.log('Feche os olhos')
}

function stringy(size) {
  let string =''
  for(i =0; i< size; i ++){
    if(i% 2 ===0){
      string+="1" 
    }else {
      string+="0"
    }
  }
 return string
}

console.log(stringy(4))

function pipeFix(numbers){
  const arr =[]
  for(i =numbers[0]; i<= numbers[numbers.length-1]; i++){
    arr.push(i)
  }
  return arr
}

console.log(pipeFix([-1,4]))

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let idade = 32;
let idadeMae = 63;
if(idade > idadeMae ){
  console.log('é maior')
}else if (idade === idadeMae){
  console.log('é igual')
}else {
  console.log('é menor')
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(5 - ' ')
'3'

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//true
var idade = 28;//true
var possuiDoutorado = false;//false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//false
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//Cão