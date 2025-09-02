## function.apply

- 첫번째 인자: 함수 안에 this x > null / 함수 안에 this 있음 > 원하는 객체
- 두번째 인자: 배열, 유사 배열

```js
function sum(a, b, c) {
  return a + b + c
}

let list = [1, 2, 3]
sum(list[0], list[1], list[2])
```

- 1. sum(...list) : 스프레드 문법
- 2. sum.apply(null, list)

```js
function sayHello() {
  console.log(this.name)
}

let jisu = { name: "hamster" }
sayHello.apply(jisu) // hamster
```

- this의 대상 > jisu

## call, apply, bind

```js
function say(greeting, name) {
  console.log(greeting + ", " + name + " from " + this.place)
}

let context = { place: "Korea" }
```

```js
say.call(context, "Hi", "햄톨") // "Hi, 햄톨 from Korea"
```

- call: 호출

```js
say.apply(context, ["Hello", "햄톨"]) // "Hello, 햄톨 from Korea"
```

- apply: 호출 + 인자가 배열

```js
let boundSay = say.bind(context, "Hey")
boundSay("햄톨") // "Hey, 햄톨 from Korea"
```

- 즉시 실행 x, 함수 반환
- bind로 첫번째 인자만 고정 > 나머지는 호출 시
