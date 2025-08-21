## object.assign (얕은 복사)

```js
let hamster = { name: "jisu" }
let isDie = { isDie: false }

Object.assign(hamster, isDie)
```

```js
hamster = {
  name: "jisu",
  isDie: false,
}
```

- 여러 객체를 하나로 병합
  - 첫번째 인수엔 목표로 하는 객체
  - 나머지 인수엔 복사하고 하는 객체

```js
let hamster = { name: "jisu" }
let jisu = Object.assign({}, hamster)
```

- 빈 배열에 변수 할당

## 📕

- 객체는 참조에 의해 복사
- 서랍장은 하나 여러개의 열쇠
