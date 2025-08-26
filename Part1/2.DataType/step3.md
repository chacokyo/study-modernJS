## pop

```js
let hamster = ["apple", "orange", "pear"]
hamster.pop() // 'pear'
hamster // 'apple', 'orange'
```

- 배열의 끝 요소 제거
- 제거한 요소 반환

## push

```js
let hamster = ["ham"]
hamster.push("bob")
hamster // 'ham', 'bob'
```

```js
hamster.push("ramen", "kimbab") // 요소 여러개 가능
```

- 배열 끝에 요소 추가

## shift

```js
let hamster = ["ham", "bob", "jisu"]
hamster.shift()
hamster // 'bob', 'jisu'
```

- 배열 앞 요소 제거
- 제거한 요소 반환

## unshift

```js
let jisu = ["jisu", "hamster"]
jisu.unshift("ramen")
jisu // 'ramen', 'jisu', 'hamster'
```

```js
hamster.unshift("cherry", "kimbab") // 요소 여러개 가능
```

- 배열 앞에 요소 추가

## for of

```js
let animals = ["hamster", "lion"]
for (let animal of animals) {
  animal // 'hamter', 'lion'
}
```

- 반복문으로 배열 요소의 값 얻기

## length

```js
let arr = [1, 2, 3, 4, 5]
arr.length = 2
arr // [1,2]
```

- 배열의 길이를 감소 시키면, 배열이 짤린다.
