## 나머지 매개변수

```js
function sumAll(...args) {
  let total = 0
  for (let arg of args) {
    total += arg
  }
  return total
}

sumAll(1, 2, 3) // 6
```

- 모든 인수가 배열 args로

## 전개 구문(스프레드)

```js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(Math.max(...arr1, ...arr2))
```
