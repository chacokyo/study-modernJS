## 함수 객체

### 함수 프로퍼티

: 함수도 객체 > 프로퍼티 가질 수 있음

```js
function makeCounter() {
  let count = 0
  function counter() {
    return count++
  }

  counter.set = (n) => (count = n)
  return counter
}

let counter = makeCounter()

counter.set(10) // 10
```

- counter는 함수 객체
- 자신이 선언된 스코프 기억 > 클로저

### f.toString

: 객체가 문자열로 바뀔 때 원하는 값 얻기

```js
{
  function f() {}
  f.toString = function () {
    return
  }
}
```

- JS엔진은 toString을 함수로서 호출 하려고 함 > 값엔 함수로 재정의 하는게 보편적
- f.toString > f가 문자열로 반환될때 실행
