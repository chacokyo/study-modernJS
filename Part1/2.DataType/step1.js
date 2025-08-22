// 과제1.
// 사용자에게 두 수를 입력받기
let num1 = +prompt("first value")
let num2 = +prompt("second value")

// 과제2.
Math.round((6.35 * 10) / 10)

// 과제3.
// 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber
// 반환되는 값은 숫자형
// 사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환

function readNumber() {
  let input
  do {
    input = prompt("유효한 숫자를 입력해주세요")
  } while (!isFinite(input))
}

// 과제4.
// random(min, max)함수 > min부터 max까지 임의의 부동 소수점 숫자를 생성.

function random(min, max) {
  return Math.random() * (max - min) + min
}
