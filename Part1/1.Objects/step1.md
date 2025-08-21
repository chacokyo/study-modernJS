`step1`
## key in object
```js
let hamster = {name: 'jisu', age: 1004}
'age' in hamster // true
'die' in hamster // false
```
- 프로퍼티의 존재 여부 확인

```js
let hamster = {}
hamster.key === undefined // true
```
- 객체는 존재하지 않는 프로퍼티에 접근 시 undefined 반환

## for...in 반복문
```js
let hamster = {
	name: 'jisu',
	age: 1004,
}

for(let key in hamster) {
	key // name, age
	hamster[key] // jisu, 1004 (value 값)
}
```
- 객체의 모든 키 순환
- 반복 변수 선언 (key)

## delete 연산자
```js
let hamter = {
	name: 'jisu'
}

delete hamster.name
```
- 프로퍼티를 삭제하고 싶은 경우

## 단축 구문
```js
function hamster(name) {
	return {
		name
		// name : name
	}
}
```
- key 이름과 변수 이름이 동일한 경우, key 값만 적어도 됨