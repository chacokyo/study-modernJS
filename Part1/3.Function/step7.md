## bind

```js
let hamster = {
  name: "jisu",
  greeting() {
    console.log(`hi,${this.name}`)
  },
}

let jisu = hamster.greeting.bind(hamster)
jisu() // hi, jisu
```

- this를 고정시키기

```js
function multiply(a, b) {
  return a * b
}

const double = multiply.bind(null, 2)
```

- 인수로 default값 정하기

```js
button.addEventListener("click", handler.bind(obj)) // this = obj
```

- 이벤트 헨들러에서 유용
