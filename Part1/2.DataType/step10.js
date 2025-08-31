// 과제1.
let user = {
  name: "jisu",
  age: 1004,
}

let userJS = JSON.parse(JSON.stringify(user))

// 과제2.
let room = {
  number: 23,
}

let meetup = {
  title: "conference",
  occupiedBy: [{ name: "jisu" }, { name: "minha" }],
  place: room,
}

room.occupiedBy = meetup
meetup.self = meetup

console.log(
  JSON.stringify(meetup, function (key, value) {
    return key != "" && value == meetup ? undefined : value
  })
)
