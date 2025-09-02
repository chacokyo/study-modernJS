// 과제1-1.
function printNumbers(from, to) {
  let current = from
  function go() {
    console.log(current)
    if (current < to) {
      current++
      setTimeout(go, 1000)
    }
  }
  setTimeout(go, 1000)
}

// 과제2.
let i = 0
setTimeout(() => console.log(i), 10)

for (let l = 0; l < 1e9; l++) {
  i++
}
