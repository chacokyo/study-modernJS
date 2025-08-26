## slice

```js
let hamster = "hamster"
hamster.slice(0, 2) // ha
```

- 문자열의 start부터 end(end는 미포함)까지 반환

```js
let hamster = "hamster"
hamster.slice(3) //ster 3번 부터 끝까지
```

- 두번째 인수가 생략된 경우, 명시한 위치부터 문자열 끝까지

```js
let hamster = "hamster"
hamster.slice(-3, -1) // te
```

- 음수는 문자열 끝에서 부터 카운팅

## indexOf

```js
let hamster = "hamster"
hamster.indexOf("ham") // 0
hamster.indexOf("te") // 4
```

- 괄호안의 문자열을 찾으면 위치 반환, 아니면 -1 반환

## includes

```js
"hamster".includes("ham") // true
```

- 문자열에 괄호 안의 문자가 있으면 true, 없으면 false

```js
"hamster".includes("s", 3) // true
```

- 두번째 인수: 해당 위치 부터 문자열 검사

## startsWith, endsWith

```js
"hamster".startsWith("ha") // true
"hamster".endsWith("ster") //true
```

- 문자열이 괄호안에 있는 문자로 시작, 끝나는지 확인

## repeat

```js
"hamster".repeat(2) // 'hamsterhamster'
```

- 문자열 반복

## trim

```js
"hamster ".trim() // 'hamster
```

- 문자열의 앞과 끝의 공백 제거
