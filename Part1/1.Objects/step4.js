// 과제1.
// read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력 받음. 입력받은 값은 객체의 프로퍼티에 저장.
// sum()은 저장된 두 값의 합을 반환.
// mul()은 저장된 두 값의 곱을 반환.

let calculator = {
	read() {
		this.num1 = +prompt('first value')
		this.num2 = +prompt('second value')
	},

	sum() {
		return this.num1 + this.num2
	},

		mul() {
		return this.num1 * this.num2
	}
	
}

// 과제2.

let ladder = {
  step: 0,

	up() {
		this.step ++
		return this
	},
	down() {
		this.step --
		return this
	},
	showStep() {
		return console.log(this.step)
	}
}

ladder.up().down().showStep()

