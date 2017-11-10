import * as React from 'react'
import * as ReactDOM from 'react-dom'

import LeastSquares from './hw_problems/LeastSquares'
import math from 'mathjs'
import * as ch6 from './math/ch6'

window.math = math
window.ch6 = ch6

ReactDOM.render(
  <LeastSquares/>,
  document.getElementById('app')
)
