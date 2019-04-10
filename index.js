MAP 
const cars = ["Type R", "Model S", "GTR", "GTS", "Celica"]
// const map = (arr,cb) => {
//     const newArr = []
//     for (let i = 0; i <arr.length; i++){
//         newArr.push(cb(arr[i]))
//     }
//     return newArr
// }

const map = (arr, cb) => {
  return reduce(arr, (acc, val) => {
    return []
  }, [])
}

const garageMap = map(cars, car => car + 1)

console.log(garageMap)

// REDUCE

// const names = [
//   {
//     first: 'Justin',
//     last: 'Saget'
//   },
//   {
//     first: 'Archie',
//     last: 'Saquilabon'
//   },
//   {
//     first: 'Chris',
//     last: 'Ha'
//   }
// ]

// const reduce = (arr, cb, init=null) => {
//     let acc = init
//     for(let i = 0; i < arr.length; i++){
//         acc = cb(acc, arr[i])
//     }
//     return acc
// }

// const numbers = [1, 2, 3]
// // reduce()
// // 6

// const fullNames = reduce(names, (acc, name) => {
//   // ...null OR ...[]
//   // []
//   // ['Justin Saget']
//   // ['Justin Saget', 'Archie Saquilabon']
//   // ['Justin Saget', 'Archie Saquilabon', 'Chris Ha']
//     return [
//       ...acc,
//       `${name.first} ${name.last}`
//     ]
// }, ['Jon Ha', 'Lil Jon'])

// console.log(fullNames)
// ['Justin Saget']


// FILTER

// const filter = (arr, cb) => {
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if (cb(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// const myCars = filter(cars, (car) => car === 'Model S' || car === 'Type R')
// console.log(myCars)

// const myCars = ['Model S', ' Type R']
// const garage = filter(cars, car => _.find(myCars, car))
// const garage = filter(cars, car => myCars.indexOf(car) !== -1)
// const garage = filter(cars, car => car === 'Model S' || car === 'Type R')
