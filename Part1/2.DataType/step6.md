## WeakMap

```js
let hamster = new weakMap()
```

- 키가 반드시 객체여야 함
- 객체가 가비지 컬렉션의 대상

## WeakSet

```js
let isVisted = new WeakSet()
let jisu = { name: "hamster" }
let minha = { name: "tokki" }
let koco = { name: "koco" }

isVisted.add(jisu) // 지수 방문
isVisted.add(minha) // 민하 방문
isVisted.add(jisu) // 지수 재방문

console.log(isVisted.has(koco)) // 방문 여부 확인 false
console.log(isVisted.has(jisu)) // 방문 여부 확인 true

jisu = null
console.log(isVisted.has(jisu)) // 객체 삭제시 false
```

- 주로 예, 아니오 같은 간단한 답변 얻는 용도
- weakMap과 유사
- 객체만 저장

`add, has, delete` ok  
`sixe, keys()` 같은 반복 작업은 x
