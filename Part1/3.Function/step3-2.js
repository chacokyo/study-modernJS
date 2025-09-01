// 과제1.
let arr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr2) {
  return function (x) {
    return arr2.includes(x)
  }
}

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

// 과제2.
let users = [
  { name: "jisu", age: 20 },
  { name: "minha", age: 23 },
  { name: "abba", age: 40 },
]

// 과제3.
function byField(filter) {
  // 오름차순
  return (a, b) => (a[filter] > b[filter] ? 1 : -1)
}

// 과제4.
function makeArmy() {
  let shooters = []

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i)
    }
    shooters.push(shooter)
  }

  return shooters
}

let army = makeArmy()

army[0]() // 0번째 shooter가 10을 출력함
army[5]()
