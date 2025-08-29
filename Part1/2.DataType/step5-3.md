## set

```js
new Set() // 셋 만들기
set.add() // 유일 무이한 값만 저장
set.delte(value) // 값 제거 후 true, false 반환
set.has(value) // 있으면 true
set.clear() // 셋 비우기
set.size() // 셋에 있는 값의 갯수
```

- 키 없음
- 중복 없는 값 저장
- arr.find은 중복을 찾기 위해 배열 전체 뒤짐, set은 이 부분에서 최적화를 가짐
- for of나 forEach로 반복 작업 가능
