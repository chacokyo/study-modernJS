// 과제1.
let salaries = {
  jisu: 100,
  minha: 300,
  tokki: 250,
}

function sumSalaries1(salaries) {
  return Object.values(salaries).reduce((sum, cur) => sum + cur, 0)
}

function sumSalaries(salaries) {
  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  }
  return sum
}

let friend = Symbol("friend")
// 과제2.
let hamster = {
  name: "jisu",
  age: 1004,
  job: "killer",
  [friend]: "minha",
}

function count(obj) {
  return Object.keys(hamster).length
}
console.log(count(hamster))
