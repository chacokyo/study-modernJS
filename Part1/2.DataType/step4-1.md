## splice

```js
let hamster = ["jisu", "hamster"]
hamster.splice(1, 1) // 'hamster'제거
hamster // ['jisu']
```

- `splice(index, deleteCount)`
- index 부터 deleteCount 만큼 삭제

```js
let hamster = ["jisu", "hamster"]
hamster.splice(1, 1, "tokki")
hamster // ['jisu', 'tokki']
```

- 요소 지우고 해당 위치에 다른 요소 삽입

```js
let hamster = ["jisu", "hamster"]
hamster.splice(1, 0, "tokki")
hamster // ['jisu','tokki', 'hamster']
```

- 새 요소만 추가

## concat

: 기존 배열 요소를 사용해 **새로운 배열** 만들기

```js
let hamster = [1, 2]
hamster.concat([3, 4]) // [1, 2, 3, 4]
hamster.concat([3, 4], [5, 6]) // [1, 2, 3, 4, 5, 6]
hamster.concat([3, 4], 5, 6) // [1, 2, 3, 4, 5, 6]
```

## forEach

```js
let hamster = ["jisu", "hamster"]
hamster.forEach(
  (item, index, array) => `${item} is at index ${index} in ${array}`
) // hamster is at index 1 in jisu,hamster
```

- 함수를 배열 요소 각각에 실행 가능

## find

: 객체로 이루어진 배열에서 특정 조건에 부합하는 객체 찾기

```js
let hamster = [
  { id: 1, name: "tokki" },
  { id: 2, name: "jisu" },
]

let user = hamster.find((item) => item.id == 1)
user.name // tokki
```

- 함수의 반환 값을 true로 만드는 단 하나의 요소
- 요소가 여러개라면 filter 사용

## filter

```js
let hamster = [
  { id: 1, name: "tokki" },
  { id: 2, name: "jisu" },
  { id: 3, name: "killer" },
]

let user = hamster.filter((item) => item.id < 3)
// [ { id: 1, name: 'tokki' }, { id: 2, name: 'jisu' } ]
```

- 요소 전체를 담은 배열 반환

## map

```js
let lengths = ["hamster", "jisu"].map((item) => item.length)
lengths // [7, 4]
```

- 호출 결과를 배열로 반환

## sort

```js
let nums = [1, 2, 15]
nums.sort()
nums // [1, 15, 2]
```

- 문자형으로 변환된 후 재정렬된 배열 반환

```js
let nums = [1, 2, 15]
nums.sort((a, b) => a - b)
nums // [1, 2, 15]
```

- 인수로 정렬함수 전달 가능
- `((a, b) => a - b)` : 올림차순
- `((a, b) => b -a )` : 내림차순

## reverse

```js
let hamster = [1, 2, 3]
hamster.reverse()
hamster // [3, 2, 1]
```

- 요소를 역순으로 정렬
