// 과제1.
function makeCounter() {
  let count = 0
  function counter() {
    return count++
  }

  counter.set = (n) => (count = n)

  counter.decrease = () => count--
  return counter
}

// 과제2.
function sum(a) {
  let currentSum = a

  function f(b) {
    currentSum += b
  }

  f.toString = function () {
    return currentSum
  }

  return f
}
