// 과제1.
let user = { name: "John", years: 30 }

const { name, years: age, isAdmin = false } = user

// 과제2.
let seller = {
  ham: 200,
  minha: 400,
  tokki: 80,
  jisu: 300,
}

// 가장 큰수 찾기

function topSeller(seller) {
  let topScore = Object.values(seller).sort((a, b) => b - a)[0]

  for (let [name, score] of Object.entries(seller)) {
    if (score === topScore) return name
  }
}
