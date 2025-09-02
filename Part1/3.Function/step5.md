## setTimeout

### 재귀적 호출 패턴

```js
function jisu() {
  function go() {
    console.log("hamster")
    setTimeout(go, 1000) // 다음 실행 예약
  }

  setTimeout(go, 1000)
}
```

- 반복되는 setTimeout 만들기 > 다음 실행 예약 / 재귀 호출
- setInterval은 자동 반복 예약 가능

## 실행 시점

```js
let n = 0
setTimeout(()=> console.log(n), 10) // step1
for(let i =0; i < 1e9; i ++>) {
  n ++ // step2
}
```

- `step1` : 10초 뒤에 실행 시켜 > 큐에 넣어둠
- `step2` : 반복문 실행 (메인 스레드) > 큐는 잠시 스탑
- `step2` 종료 > 메인 스래드 빔 > `step1` 실행

- JS는 싱글 스레드 > 루프 스케줄링에 따라 소요되는 시간을 달라짐
