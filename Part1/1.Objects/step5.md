`step5`

## 생성자 함수

: 유사 객체 여러개 만들 때 유용

```js
function Hamster(name) {
  this.name = name
  this.age = 1004
}

let jisu = new Hamster("jisu")
```

- `new` 연산자를 붙여 실행
- 반환값: `this`로 저장한 값
- 인수가 없다면 괄호 생략 가능

```js
jisu = {
  name: "jisu",
  age: 1004,
}
```

- 빈 객체를 만들어 this에 할당
