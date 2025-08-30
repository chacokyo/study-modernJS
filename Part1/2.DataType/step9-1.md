# Date 객체

: 날짜 저장, 관련 메서드 제공하는 내장 객체

## Date()

```js
let now = new Date()
```

## get-

```js
getFullYear() // 네자리수 연도
getMonth() // 월 - 0= 1월
getDate() // 일
getDay() // 요일 - 0= 일요일
getHours() // 시
getMinutes() // 분
getSeconds() // 초
getMilliseconds() // 밀리초
getTime() // 타임 스탭프 반환
```

## set-

- 날짜 구성 요소를 얻는 메서드

```js
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)
```

- 날짜 구성 요소 설정하는 메서드

```js
let jisu = new Date()
jisu.setMinutes(jisu.getMinutes() + 10)
jisu // 현재 시간에서 10분이 지난 시간
```

- **자동 새로 고침**
- 일정 시간이 지난 후의 날짜 구하기

## Date.now()

- new Date.getTime()와 유사
- 객체를 만들지 않기에 성능에 좋음

## Date.parse

- 문자열에서 날짜 가져오기
- 단 문자 형식을 지켜야 함
