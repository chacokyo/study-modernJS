// 과제 1.
function add(a, b) {
  console.log(a + b)
}

function spy(f) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return f.apply(this, args)
  }

  wrapper.calls = []

  return wrapper
}

add = spy(add)

add(1, 2)
add(2, 3)

for (let args of add.calls) {
  console.log(args.join())
}

// 과제2.
function f(x) {
  console.log(x)
}

function delay(f, t) {
  return function (...args) {
    setTimeout(() => f.apply(this, args), t)
  }
}

let f1000 = delay(f, 1000)
let f1500 = delay(f, 1500)
