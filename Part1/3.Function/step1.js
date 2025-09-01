// 과제1.
function sumTo1(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }

  return sum
}

function sumTo2(n) {
  return n === 1 ? 1 : n + sumTo2(n - 1)
}

function sumTo3(n) {
  return (n * (n + 1)) / 2
}

// 과제2.
function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1)
}

// 과제3.
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

// 과제4.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

function printList(list) {
  if (list.next) {
    printList(list.next)
  }
  console.log(list.value)
}

printList(list)
