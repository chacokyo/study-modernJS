// 과제1.
// 생성자 함수 Calculator

// 함수 내에 있는 key
// 1. calculator 함수
// 기능:
// 인수: 연산자, 숫자 조합의 문자열
// 반환값: 연산 결과
// 예시: 변수.calculate("3 + 7") // 10

// 2. addMethod 함수
// 기능: 새로운 연산 학습
// 매개변수: name-연산자 이름, func(a,b)-익명 함수
// 예시: 변수.addMethod("**", (a, b) => a ** b)
//      powerCalc.calculate("2 ** 3") // 8

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = function (string) {
    const splitString = string.split(" "),
      a = +splitString[0],
      op = splitString[1],
      b = +splitString[2]

    return this.methods[op](a, b)
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}
