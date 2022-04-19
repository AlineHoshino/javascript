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