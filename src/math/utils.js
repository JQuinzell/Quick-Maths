export function logVector(vec) {
  console.log(convertFractions(vec))
}
function convertFractions(vec) {
  return vec.map(convertFraction)
}

function convertFraction(frac) {
  if(typeof frac !== 'object') return frac
  return `${frac.s < 1 ? '-' : ''}${frac.n}/${frac.d}`
}
