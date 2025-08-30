# 구조 분해 할당

: 객체나 배열을 변수로 분해, 할당 > 필요한 값만 가져올 수 있음

## 배열

```js
let hamster = ["minha", "Jisu"]
let [firstHamster, lastHamster] = hamster

firstHamster // minha
lastHamster // jisu
```

```js
let killer = ["minha", "jisu", "hamster"]
let [first, , third] = killer
third // hamster
```

- 필요하지 않는 요소는 쉼표 구분

```js
let user = ({}[(user.name, user.surname)] = "Lee Jisu".split(" "))
user.name // Lee
```

- 객체 프로퍼티 할당 연산자

```js
let [fist, second, ...rest]
```

- rest는 나머지 배열 요소들이 저장된 새로운 배열

```js
let [name = jisu, job = killer]
```

- 기본값 지정

## 객체

```js
let minha = {
  address: "seoul",
  job: "killer",
}

let { address: ad, job: j = "student" } = minha
ad // seoul
```

- 객체 프로퍼티: 새이름 변수 = 기본 값

```js
let jisu = {
  name: "jisu",
  address: "seoul",
  job: "killer",
}

let { name, ...info } = jisu

info // {	address: "seoul", job: "killer"}
```

## 이터러블

```js
let [a, b, c] = "abc"
```

```js
let [one, two, three] = new Set([1, 2, 3])
```
