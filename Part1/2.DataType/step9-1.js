// 과제1.
let now = new Date(2012, 1, 20, 3, 12)

// 과제2.
// 날짜를 입력하면 요일을 보여주는 함수
function getWeekDay(date) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  return days[date.getDay()]
}

// 과제3.
function getLocalDay(date) {
  let day = date.getDay()
  if (day == 0) {
    day = 7
  }
  return day
}

// 과제4.
function getDateAgo(today, ago) {
  let newDay = new Date(today)

  newDay.setDate(today.getDate() - ago)
  return newDay.getDate()
}

let date = new Date()

// 과제5.

function getSecondsToday() {
  let now = new Date()
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let diff = now - today
  return Math.round(diff / 1000)
}
console.log(getSecondsToday())
