// 과제1.
let fruits = ["apple", "hamster"]
let basket = fruits

basket.push("banana")

// 과제2.
const styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll")
styles[Math.floor((styles.length - 1) / 2)] = "Classics"
styles.shift()
styles.unshift("Rap", "Reggae")

// 과제3.
// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춤.
// 배열 요소의 합을 계산하고 리턴.

function sumInput() {
  let nums = []

  while (true) {
    let num = prompt("숫자 입력", 0)

    if (num === "" || num === null || !isFinite(num)) break

    nums.push(+num)
  }
  let total = 0
  for (let num of nums) {
    total += num
  }
  return total
}

// 과제4.
// 입력값은 arr = [1, -2, 3, 4, -9, 6] 숫자로만 구성된 배열
// 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다
// 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)
// 요소 전체가 음수라면 0 반환

function getMaxSubSum(nums) {
  // 1. 배열 중 최대 값 찾기 >  변수
  let maxSum = 0
  let partSum = 0

  for (let num of nums) {
    partSum += num
    maxSum = Math.max(maxSum, partSum)
    if (partSum < 0) partSum = 0
  }
  return maxSum
}
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]))
