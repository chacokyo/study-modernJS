// 과제1
// 문자값의 첫글자를 대문자로 바꾸는 함수
function ucFirst(string) {
  return typeof string === "string" && string.length > 0
    ? string[0].toUpperCase() + string.slice(1)
    : string
}

// 과제2
// str에 hamster나 xxx 문자열이 있으면 true / 없으면 false 를 반환하는 함수 checkSpam(str)
function checkSpam(str) {
  const strLowerCase = str.toLowerCase()
  return strLowerCase.includes("hamster") || strLowerCase.includes("xxx")
}

// 과제3
// str 갈이 확인 > maxLength 초과시 str의 끝을 ... 으로 대체해주는 함수
// truncate(str, maxlength)

function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str
}

// 과제4
// 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)
function extractCurrencyValue(str) {
  return +str.slice(1)
}
