let math = require('mathjs')
let combos = require('./utils').combinations

//inner product: math.dot(vec1, vec2)
// amount of vec2 in same direction as vec1
// 0 <= |x dot y| <= ||X|| ||Y||


//vector length
function length(v) {
  return math.sqrt(math.dot(v, v))
}

//Vector Distance
function distance(u, v) {
  return length(math.subtract(u, v))
}

//Vector Orthogonality
function orthogonal(u, v) {
  return math.dot(u, v) === 0
}

function isUnitVector(u) {
  return length(u) === 1
}

function orthogonalSet(vectors) {
  for (var i = 0; i < vectors.length; i++) {
    for (var j = 0; j < vectors.length; j++) {
      let ui = vectors[i]
      let uj = vectors[j]
      if(!orthogonal(ui, uj)) return false
    }
  }

  return true
}

function orthogonalProjection(y, u) {
  let fracResult = math.fraction(
    math.dot(y, u),
    math.dot(u, u)
  )

  return math.multiply(fracResult, u)
}

function orthonormal(vectors) {
  return orthogonalSet(vectors) && vectors.every(v => length(v) === 1)
}

//Find unit vector
function unitVector(v) {
  let normalizingFactor = math.fraction(1, length(v))
  return math.multiply(normalizingFactor, v)
}

function gramSchmidt(basis) {
  return basis.map((vector, i) => (
    gramSchmidtVector(i, basis)
  ))
}

function gramSchmidtVector(p, basis) {
  return basis.slice(0, p).reduce((sum, vector) => (
    math.subtract(sum, orthogonalProjection(basis[p], vector))
  ), basis[p])
}

module.exports = {
  length, distance, orthogonal, unitVector, orthogonalSet, orthogonalProjection,
  orthonormal, gramSchmidt
}
