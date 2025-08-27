## split

```js
const hamster = "jisu, tokki, bob"
const splitHamster = hamster.split(", ")
splitHamster // ['jisu', 'tokki', 'bob']
```

- 문자열을 배열로 만드는 메서드
- split(delim) : 구분자 delim을 기준으로 나눠줌

```js
const hamster = "jisu, tokki, bob"
const splitHamster = hamster.split(", ", 2)
splitHamster // ['jisu', 'tokki']
```

- 두번째 인수로 배열의 길이 제한 받음

```js
const hamster = "jisu"
hamster.split("")
hamster // ['j', 'i' 's', 'u']
```

- 빈 문자열 지정 시 글자 단위로 분리 가능

## join

```js
let arr = ["hamster", "jisu"]
let str = arr.join(";")
str // hamster;jisu;
```

- 배열 요소 모두를 하나의 문자열로 만들기

## reduce

```js
let arr = [1, 2, 3, 4, 5]
let result = arr.reduce((sum, current) => sum + current, 0)
```

- sum: 앞선 결과가 누적되어 저장된 누산기

## Array.isArray()

- 배열이면 true, 아니면 false
