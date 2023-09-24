

export default (content) => {
  // Write your code here

  //1 
  const rows = content.split('\n');
  const data = rows.slice(1).map((row) => 
  row.split(';').slice(0, 33).map(el => el.trim())
)
 data.splice(-1 , 1)
 console.log(data)
console.log(`Count: ${data.length}`); 
//2
  const  codes = data.map((row) => row[3])
const uniqueCodes = [...new Set(codes)];
const unique = uniqueCodes.sort();
console.log(`Currency codes: ${unique.join(', ')}`)


//3
const currency = data.map((row) => row[4])//.split('').join( ''))
//console.log(currency)
const max = Math.max(...currency)
//console.log(max)
const min = Math.min(...currency)
//console.log(min)
console.log(`Cost of currency: Min: ${min}, Max: ${max}`)

//4
const fMinCurrency = currency.filter((curr) => curr >= 10)
const  fMaxCurrency = fMinCurrency.filter((curr) => curr <= 30)
const countCurrency = fMaxCurrency.length
console.log(`Count currency between 10 and 30: ${countCurrency}`)
//5


// Отфильтруем исходный массив, чтобы оставить только валюты USD, EUR и CHF
const filValue = data.filter(row => {
  const value = row[3];
  return value === 'USD' || value === 'EUR' || value === 'CHF';
});
const kaka = filValue.map(row => parseFloat(row[4]))
console.log(kaka)
let average = 0
for (let i = 0; i < kaka.length; i ++ ){
  average = average + kaka[i] 
}
console.log(average / kaka.length)

//const normeptaValue = Math.max(nRow)
//console.log(normeptaValue)
// Получаем значения курсов валют

}
