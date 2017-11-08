let math = require('mathjs')
let combos = require('./utils').combinations

//inner product: math.dot(vec1, vec2)
// amount of vec2 in same direction as vec1
// 0 <= |x dot y| <= ||X|| ||Y||


//vector length
export function length(v) {
  return math.sqrt(math.dot(v, v))
}

//Vector Distance
export function distance(u, v) {
  return length(math.subtract(u, v))
}

//Vector Orthogonality
export function orthogonal(u, v) {
  return math.dot(u, v) === 0
}

export function isUnitVector(u) {
  return length(u) === 1
}

export function orthogonalSet(vectors) {
  for (var i = 0; i < vectors.length; i++) {
    for (var j = 0; j < vectors.length; j++) {
      let ui = vectors[i]
      let uj = vectors[j]
      if(!orthogonal(ui, uj)) return false
    }
  }

  return true
}

export function orthogonalProjection(y, u) {
  let num = math.dot(y, u)
  let denom = math.dot(u, u)

  //weird situation
  //not sure why mathjs cant handle its own fractions...
  let fracResult = math.fraction(
    math.number(num),
    math.number(denom)
  )

  return math.multiply(fracResult, u)
}

export function orthonormal(vectors) {
  return orthogonalSet(vectors) && vectors.every(v => length(v) === 1)
}

//Find unit vector
export function unitVector(v) {
  let normalizingFactor = math.fraction(1, length(v))
  return math.multiply(normalizingFactor, v)
}

export function gramSchmidt(basis) {
  let solutions = []
  return basis.map((vector, i) => {
    const result = gramSchmidtVector(i, solutions, vector)
    solutions.push(result)
    return result
  })
}

function gramSchmidtVector(p, solutions, current) {
  return solutions.slice(0, p).reduce((sum, vector) => (
    math.subtract(sum, orthogonalProjection(current, vector))
  ), current)
}
