// import React from 'react'

// // Mostre os dados da aplicação, como aprensetado no vídeo
// // Não utilize CSS externo, use o style para mudar as cores
// // Se a situação estiver ativa pinte de verde, inativa vermelho
// // Se o gasto for maior que 10000 mostre uma mensagem
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };


// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ], 
//   ativa: false,
// };

// const App = () => {
//   const dados = luana;
//   const total =dados.compras.map(c => Number(c.preco.replace('R$ ',''))).reduce((a,b)=> a +b,0)
//   return( 
//   <div>
//     <p>Nome: {dados.cliente}</p>
//     <p>Idade:{dados.idade}</p>
//     <p >Situação: <span style={{color: dados.ativa?'green':'red'}}>{dados.ativa? 'Ativa': 'Inativa'}</span></p>
//     <p>Total gasto: {total}</p>
//     {total>=10000 && <p>Você está gastando muito!</p>}
//   </div>
//   )
// };


// export default App;


// const produtos = [
//     {
//       id: 1,
//       nome: 'Smartphone',
//       preco: 'R$ 2000',
//       cores: ['#29d8d5', '#252a34', '#fc3766'],
//     },
//     {
//       id: 2,
//       nome: 'Notebook',
//       preco: 'R$ 3000',
//       cores: ['#ffd045', '#d4394b', '#f37c59'],
//     },
//     {
//       id: 3,
//       nome: 'Tablet',
//       preco: 'R$ 1500',
//       cores: ['#365069', '#47c1c8', '#f95786'],
//     },
//   ];
  
  
  
//   const App = () => {
//     const dados = produtos.filter(({preco}) => Number(preco.replace('R$ ',''))>1500)
//     console.log(dados)
//     return( 
//     <section>
//       <Header/>
//       {dados.map(({id,nome, preco, cores}) => <div>
//         <h1 key={id}>{nome}</h1>
//         <p>Preço: {preco}</p>
//         <ul>{cores.map(cor =>
//         <li style={{backgroundColor:cor, color:'white'}}key={cor}>{cor}</li>)}</ul>
//       </div>)}
//     </section>
//     )
//   };