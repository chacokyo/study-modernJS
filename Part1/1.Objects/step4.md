`step4`

## this 키워드
### 일반 함수
```js
let hamster = {
	name: 'jisu',

	showName() {
		console.log(this.name) // 'jisu'
	}
}
```
- this: 호출되는 시점에 따라 this 결정.
- `hamster.showName()`으로 객체를 통해 호출 시, this는 해당 객체를 가르킴.

### 화살표 함수
```js
let hamster = {
	name: 'jisu',

	showName: () => {
		console.log(this.age) // undefined
	}

}
```
- this: 정의된 위치의 상위 스코프 (브라우저의 경우 window)


