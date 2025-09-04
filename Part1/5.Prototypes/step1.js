// 과제1.
;() => {
  let animal = {
    jumps: null,
  }
  let rabbit = {
    __proto__: animal,
    jumps: true,
  }

  console.log(rabbit.jumps) // ? true

  delete rabbit.jumps

  console.log(rabbit.jumps) // ? null

  delete animal.jumps

  console.log(rabbit.jumps) // ? undefined
}

// 과제2.
;() => {
  let head = {
    glasses: 1,
  }

  let table = {
    pen: 3,
    __proto__: head,
  }

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  }

  let pockets = {
    money: 2000,
    __proto__: bed,
  }

  function benchMark(fn, label) {
    const start = performance.now()
    for (let i = 0; i < 1_000_000; i++) {
      fn()
    }
    const end = performance.now()

    console.log(`${label}의 차이 : ${(end - start).toFixed(2)}ms`)
  }

  benchMark(() => pockets.glasses, "pockets.glasses")
  benchMark(() => head.glasses, "head.glasses")
}

// 과제3.
;(() => {
  let hamster = {
    stomach: [],

    eat(food) {
      this.stomach = [food]
    },
  }

  let speedy = {
    __proto__: hamster,
  }

  let lazy = {
    __proto__: hamster,
  }

  // 햄스터 speedy가 음식을 먹습니다.
  speedy.eat("apple", "banana")
  console.log(speedy.stomach)

  console.log(lazy.stomach)
})()
