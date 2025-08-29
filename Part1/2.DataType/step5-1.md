## 맵

- 객체와 유사하지만, 키 값에 다양한 자료형 허용

```js
new Map() // 맵 만들기
map.set(key, value) // key에 value 저장
map.get(key) // value 반환, 없으면 undefind
map.has(key) // key 있으면 true, 없으먄 false, 참조 동일성
map.delete(key) // key의 value값 삭제
map.clear() // 요소 다 제거
map.size() // 요소 갯수 반환
```

```js
let hamster = { name: "jisu" }
let animals = new Map()
animals.set(hamster, "no.1")
console.log(animals.get(hamster)) // 'no.1
```

- 객체를 키로 사용한 예시
- map.set은 자신이 반환 > 체이닝 가능

```js
let animals = new Map([[{ name: "tokki" }, "no.0"]])
```

- 바로 [[]] 배열안에 키, 값 할당 가능

## 맵 반복 작업

```js
let animals = new Map([
  [{ name: "tokki" }, "no.0"],
  [{ name: "jisu" }, "no.1"],
  [{ name: "minha" }, "no.2"],
])

for (let name of animals.keys()) {
  console.log(animal) // 키 출력
}

for (let no of animals.values()) {
  console.log(animal) // 값 출력
}

animals.forEach((value, key) => {
  console.log(`${key.name}은 ${value}`)
})
```

- 배열과 유사하게 for of, forEach문 사용 가능
