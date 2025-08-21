// 과제 1.
const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'peter'

delete user.name

// 과제 2.
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환하는 함수 
function isEmpty(obj) {
	for(let key in obj) {
		return false
	} 
	return true
}

let hamster = {}
console.log(isEmpty(hamster))
hamster.name = 'jisu'
console.log(isEmpty(hamster))


// 과제 3.
// 월급을 담은 객체 money, 팀원들의 월급을 합한 값을 구하고 그 값을 변수 sum에 담아라
// 만약 monney가 비어 있다면 sum의 값은 0

let money = {
	jisu : 100,
	hamin: 120,
	anna: 130,
}

let sum = 0
for(let key in money) {
	sum += money[key]
}


// 과제 4.
// 객체의 프로퍼티 값이 숫자인 경우 그 값을 두배로 해주는 함수 multiplyNum(obj)

let cat = {
	name: 'jisu',
	width: 100,
	height: 200,
}

function multiplyNum(obj) {

	for(let key in obj) {
		if (typeof obj[key] === 'number') obj[key] *= 2
	}
	return obj
}

console.log(multiplyNum(cat))