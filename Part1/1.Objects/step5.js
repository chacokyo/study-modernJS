//과제1.
// new A() == new B()가 성립 가능한 함수 A와 B

let obj = {}

function A() {
  return obj
}
function B() {
  return obj
}

console.log(new A() == new B()) // true

//과제2.
// read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장.
// sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환.
// mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환.

function Calculator() {
  this.read = function () {
    this.num1 = +prompt("first value")
    this.num2 = +prompt("second value")
  }
  this.sum = function () {
    return this.num1 + this.num2
  }
  this.mul = function () {
    return this.num1 * this.num2
  }
}

//과제3.
// 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옴.
// 메서드 read()에선 prompt 함수를 사용해 사용자로부터 받은 숫자를 value에 더함.
// 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장.

function Accumulator(value) {
  this.value = value

  this.read = function () {
    return (this.value += +prompt("더하고 싶은 값"))
  }
}
