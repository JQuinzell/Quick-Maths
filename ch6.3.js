const math = require('mathjs')


function yHat(y, span) {
  let zero = math.zeros(math.size(y))
  return span.reduce((sum, u) => (
    math.add(sum, yHatSingle(y, u))
  ), zero)
}

function yHatSingle(y, u) {
  let fracResult = math.fraction(
    math.dot(y, u),
    math.dot(u, u)
  )

  return math.multiply(fracResult, u)
}

function findZ(y, span) {
  return math.subtract(y, yHat(y, span))
}
//write x as sum of 2 vectors
function problem1(isolated, x) {
  //oops
}

function orthogonalProjection(y, span) {
  return yHat(y, span)
}

module.exports = [
  null,
  problem1,
  orthogonalProjection,
  findZ
]
