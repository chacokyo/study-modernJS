// 과제1.
// border-left-width > borderLeftWidth

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("")
}

// 과제2.
// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고
// 해당 요소를 출력해주는 함수 filterRange(arr, a, b)

function filterRange(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b)
}

// 과제3.
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소 삭제해주는 함수
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 함.

function filterRangeInPlace(arr, a, b) {
  const nums = arr.filter((num) => num >= a && num <= b)
  arr.splice(0, arr.length, nums)
}

// 과제4.
let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => b - a)

// 과제5.
// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

function copySorted(arr) {
  return arr.concat().sort()
}

let hamster = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(hamster)

console.log(sorted) // CSS, HTML, JavaScript
console.log(hamster) // HTML, JavaScript, CSS (no changes)
