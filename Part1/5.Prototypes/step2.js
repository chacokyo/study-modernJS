// 과제1.
function Hamster() {}
Hamster.prototype = {
  eats: true,
}

let hamster = new Hamster()
delete hamster.eats

// 과제2.
function User(name) {
  this.name = name
}
User.prototype = {}
let user = new User("jisu")
let user2 = new user.constructor("hamster")
