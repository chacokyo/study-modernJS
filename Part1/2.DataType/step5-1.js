// 과제1.

function unique(arr) {
  // 중복없는걸 만들기 위헤 > 배열을 셋으로
  // 셋 > 배열로
  let onlyOne = new Set(arr)
  return [...onlyOne].join(",")
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
]

// 과제2.
// 에너그램으로 만든 단어 걸러내기.
let arr = ["jisu", "suji"]

function aclean(arr) {
  let obj = {}

  for (let word of arr) {
    let onlyOne = word.toLowerCase().split("").sort().join()

    obj[onlyOne] = word
  }

  return Object.values(obj)
}

// 과제3.
let map = new Map()

map.set("no1", "John")
map.set("no2", "jisu")

let keys = Array.from(map.keys())
keys.push("more")
