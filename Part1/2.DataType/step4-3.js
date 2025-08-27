// 과제1.
let john1 = { name: "John", age: 25 }
let pete1 = { name: "Pete", age: 30 }
let mary1 = { name: "Mary", age: 28 }

let users1 = [john1, pete1, mary1]
let names = users1.map((user) => user.name)

// 과제2.
let john2 = { name: "John", surname: "Smith", id: 1 }
let pete2 = { name: "Pete", surname: "Hunt", id: 2 }
let mary2 = { name: "Mary", surname: "Key", id: 3 }

let users2 = [john2, pete2, mary2]

let usersMapped = users2.map((user, index) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}))

// 과제3.
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let arr = [pete, john, mary]
arr.sort((a, b) => a.age - b.age)

// 과제4.
// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)
let nums = [1, 2, 3]
function shuffle(array) {
  // 0보다 큰 경우 작은 경우 반반
  return array.sort(() => Math.random() - 0.5)
}

// 과제5.
// 평균 나이를 반환해주는 함수 getAverageAge(users)
let john3 = { name: "John", age: 25 }
let pete3 = { name: "Pete", age: 30 }
let mary3 = { name: "Mary", age: 29 }

let arr3 = [john3, pete3, mary3]

function getAverageAge(array) {
  return array.reduce((sum, obj) => sum + obj.age, 0) / array.length
}

// 과제6.
// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
]

function unique(array) {
  let newArray = []

  for (let str of array) {
    if (!newArray.includes(str)) {
      newArray.push(str)
    }
  }

  return newArray
}
