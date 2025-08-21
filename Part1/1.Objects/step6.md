## 옵셔널 체이닝

### ?.

```js
let hamster = {}
hamster?.name // undefined
```

- ?. 앞의 대상이 undefined or null 이면 평가를 멈춤
- undefined 반환

### ?.()

```js
let hamster = {
  setName() {
    console.log("jisu")
  },
}

hamster.setName?.()
```

- 함수 호출 가능

### ?.[]

```js
let hamster = {
  name: "jisu",
}
hamster?.["hamster"]
```

- 객체의 존재 여부 확인 후 프로퍼티에 접근할 떄 유용

### delete ?.

```js
delete hamster?.name // hamter가 있다면 name 값 삭제
```
