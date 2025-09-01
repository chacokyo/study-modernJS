// 과제2.
function makeWorker() {
  let name = "jisu" // 지역 변수
  return function () {
    console.log(name)
  }
}

// 과제3.
function hamster() {
  let count = 0
  return function () {
    return count++
  }
}

// 과제5.
function sum(a) {
  return function (b) {
    return a + b
  }
}

// 과제6.
let jisu = "hamster"

function jisuClick() {
  console.log(jisu)
  let jisu = "Bob"
}

jisuClick()
