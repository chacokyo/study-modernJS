// 과제1
let messages1 = [
  { text: "hello", from: "jisu" },
  { text: "bye", from: "hamster" },
  { text: "good", from: "bear" },
]

// 읽은 항목은 제거
let isRead = new WeakSet()
isRead.add(messages1[0])
isRead.add(messages1[1])

messages1.shift()

// 과제2

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
]

let isChecked = new WeakMap()
// 키 값 형태
isChecked.set(messages[0], "12: 00")
isChecked.set(messages[1], "18: 00")
isChecked.set(messages[2], "14: 00")

isChecked.get(messages[2])
