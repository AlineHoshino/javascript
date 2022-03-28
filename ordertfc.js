const array = [9,10,3,5,4,2];

array.sort((a,b) => a>b?1:(a<b?-1:0));

const list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Ndwedw', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];


function greetDevelopers(list) {
  const greetings = list.map(people => {
  const newArray = {
    firstName: people.firstName,
    lastName: people.lastName,
    country: people.country,
    continent: people.continent,
    age: people.age,
    language: people.language,
    greeting:` Hi ${people.firstName}, what do you like the most about ${people.language}?`
  }
  return newArray;
})
  return greetings;
}

console.log(greetDevelopers(list))