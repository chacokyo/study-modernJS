## Array.from

```js
Array.from(배열로 바꾸고 싶은 대상, mapFn, thisArg)
```

- mapFn: map()처럼 동작하는 함수

```js
let num = [1, 2, 3]
let doubled = Array,from(num, n => n * 2)
doubled // [2 ,4, 6]
```
