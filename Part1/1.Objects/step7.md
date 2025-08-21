## 심볼

: 유일한 식별자를 만들고 싶을 때 사용

```js
let hamster = Symbol("hamster")
```

- hamster라는 설명을 가진 심볼

```js
let id = Symbol('id')
let hamster = {
	[id] = 123
}
```

- 서드파티 코드에서 가져온 객체에 새 프로퍼티 추가할 때 유용
- 숨김 프로퍼티
