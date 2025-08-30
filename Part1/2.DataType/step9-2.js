// 과제1.
// 달의 마지막일을 반환하는 함수
function getLastMonth(year, month) {
  let day = new Date(year, month, 0)

  return day.getDate()
}

// 과제2.
function getSecondsToTomorrow() {
  let now = new Date()

  let tomorrow = new Date(now)
  tomorrow.setHours(24, 0, 0, 0)

  let diff = tomorrow - now
  return Math.round(diff / 1000)
}

// 과제3.
function formateDate(date) {
  let diff = new Date() - date
  let sec = Math.floor(diff / 1000)
  let min = Math.floor(diff / 60000)

  if (diff < 1000) {
    return "현재"
  } else if (sec < 60) {
    return `${sec}초 전`
  } else if (min < 60) {
    return `${min} 분 전`
  }

  let d = date
  d = [
    "0" + d.getDate(),
    "0" + d.getMonth() + 1,
    "0" + d.getFullyears(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((components) => components.slice(-2))

  return d.slice(0, 3).join(",") + "" + slice(3).join(":")
}
