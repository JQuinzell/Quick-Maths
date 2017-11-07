let math = require('mathjs')

let { length, distance, orthogonal,
  unitVector, orthogonalSet, orthogonalProjection,
  orthonormal, gramSchmidt } = require('./ch6.js')

function logVector(vec) {
  console.log(convertFractions(vec))
}
function convertFractions(vec) {
  return vec.map(convertFraction)
}

function convertFraction(frac) {
  if(typeof frac !== 'object') return frac
  return `${frac.s < 1 ? '-' : ''}${frac.n}/${frac.d}`
}

//Currently works for problems 1-6
//input values of vectors
//run program with node test.js
//copy output into mathlab
let vectors = [
  [3,-2,5],
  [3,7,1]
]

gramSchmidt(vectors).forEach(logVector)
