# JSON

## JSON.stringfy

```js
JSON.stringfy(value, replacer, space)
```

- 객체 > JSON 문자열
- space: 들여쓰기

## JSON.parse

- JSON 문자열 > 객체

## reviver

```js
let hamster = { date: "2025-08-31T12:00:00:00.000Z" }
let time = JSON.parse(hamster, function (key, value) {
  if (key === "date") return new Date(value)
  return value
}) // JSON 문자열을 객체로
```

- 두번째 인수로 함수 전달
- 원하는 값만 읽거나 쓰는게 가능해짐
