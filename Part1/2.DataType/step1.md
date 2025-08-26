## e

```js
let hamster = 1e5 // 100000
```

- e 0의 갯수

## 0x

```js
0xff //255
```

- 16진수 표현

## .toString(base)

```js
let num = 255
num.toString(16) // ff
```

```js
;(255).toString(16) // 숫자 대상인 경우 점 2개
```

- base: 2인 경우 0 또는 1
- base: 16인 경우 16진수 색, 문자 인코딩
- base: 36인 경우 긴 url을 짧게 줄일 때 유용

## Math.

```js
Math.floor(3.1) // 3
Math.ceil(3.1) // 4
Math.round(3.1) // 3
Math.trunc(3.1) // 3
```

```js
Math.floor(-3.1) // -4
Math.ceil(-3.1) // -3
Math.round(-3.1) // -3
Math.trunc(-3.1) // -3
```

(소수 첫째 자리에서)

- Math.floor : 내림
- Math.ceil : 올림
- Math.round : 반올림
- Math.trunc : 소수 무시

## Math.random()

- 0 과 1사이 난수 반환

## Math.max, Math.min

```js
Math.max(0, 1, 2, 3) // 3
Math.min(0, 1, 2, 3) // 0
```

- 최대,최소값 반환

## Math.pow(n, power)

```js
Math.pow(2, 10) // 1024 2의 10제곱
```

- n을 power번 거듭제곱한 값

### toFixed(n)

: n번째 수까지의 어림수 구하기

```js
let num = 12.34
num.toFixed(1) // 12.3
```

```js
let num = 12.34
num.toFixed(5) // 12.34000
```

- Math.round()와 유사
- 문자열 반환

## isNaN

```js
isNaN(NaN) // true
isNaN("hamster") // true
```

- 인수를 숫자로 변환 > NaN이면 true

## isFinite

```js
inFinite("15") // true
isFinite("hasmter") // false
isFinite(Infinity) // false
```

- 인수를 숫자로 변환 > NaN,Infinity,-Infinity이면 false
- 문자열이 일반 숫자인지 검증할 때 주로 사용

## parseInt, parseFloat

```js
parseInt("hamster") // NaN
```

```js
parseInt("100px") // 100
parseFloat("100px") // 100

parseInt("12.3") // 12
parseFloat("12.3.4") // 12.3

parseInt("ff", 16) //255 6진수로 파싱
```

- 숫자를 읽다가 문자를 만나면 수집된 숫자 반환
- parseInt는 정수, parseFloat은 부동 소수점
- parseInt(string, radix) : radix에 원하는 진수 지정 가능
