import * as React from 'react'
import Vector from '../forms/vector'
import Matrix from '../forms/matrix'
import math from 'mathjs'

export default class LeastSquares extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      matrix: null,
      vector: null,
      answer: {
        matrix: null,
        vector: null,
        solved: false
      },
    }
  }

  onChangeMatrix(matrix) {
    this.setState({matrix})
  }

  onChangeVector(vector) {
    this.setState({vector})
  }

  solveIfValid(matrix, vector) {
    if(matrix && vector) {
      this.solve(matrix, vector)
    }
  }

  solve() {
    let {matrix, vector} = this.state

    let alteredMatrix = math.multiply(
        math.transpose(matrix),
        matrix
      )

    let alteredVector = math.multiply(
        math.transpose(matrix),
        vector
      )

    let answer = math.multiply(
      math.inv(alteredMatrix),
      alteredVector
    )

    this.setState({
      answer: {
        matrix: alteredMatrix,
        vector: alteredVector,
        answer: answer,
        solved: true
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Find a least squares solution</h3>
        A = <Matrix
              columns={[[0,0,0],[0,0,0]]}
              onChange={this.onChangeMatrix.bind(this)}/>
        b = <Vector
              onChange={this.onChangeVector.bind(this)}/>

        <br/>

        <button onClick={this.solve.bind(this)}>Solve</button>
        <p>Refresh in order to generate new solutions :(</p>

        <br/>
        {this.state.answer.solved ?
          <div>
            A* = <Matrix
              rows={this.state.answer.matrix}
              resize="none"
              readonly={true}/>
            b* = <Matrix
              rows={this.state.answer.vector}
              resize="none"
              readonly={true}/>
            x* = <Matrix
              rows={this.state.answer.answer}
              resize="none"
              readonly={true}/>
          </div> :
          null
        }
      </div>
    )
  }
}
