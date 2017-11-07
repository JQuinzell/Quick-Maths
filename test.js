let math = require('mathjs')
let logVector = require('./utils').logVector

let { length, distance, orthogonal,
  unitVector, orthogonalSet, orthogonalProjection,
  orthonormal, gramSchmidt } = require('./ch6.js')

//Currently works for problems 1-6
//input values of vectors
//run program with node test.js
//copy output into mathlab
let vectors = [
  [1,-1,0,1,1],
  [4,-3,2,4,5],
  [6,1,4,2,9]
]

gramSchmidt(vectors).forEach(logVector)
