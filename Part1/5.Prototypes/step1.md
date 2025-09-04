## 프로토타입

: 객체가 다른 객체 참조

```js
const wildAnimal = {
  wild: "hamster",
}

const animals = {
  human: "jisu",
  __proto__: wildAnimal,
}

animals.wild // 'hamster'
```

- `__proto__`: 객체 리터럴
- 없는 프로퍼티 가져다 씀

## 밴치마크

```js
function benchmark(fn, label, iterations = 1_000_000) {
  const start = performance.now()
  for (let i = 0; i < iterations; i++) {
    fn()
  }
  const end = performance.now()
  console.log(`${label}: ${(end - start).toFixed(3)}ms`)
}
```

- performance 객체 - new Date 객체보다 더 정밀
