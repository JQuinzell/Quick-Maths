import * as React from 'react'

export default class Vector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  textToVector(text) {
    //remove potential spaces around commas
    return text.split(/[\s]*,[\s]*/).map(Number)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    let vector = this.textToVector(e.target.value)
    this.props.onResult(vector)
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="vector">
          Vector:
          <input type="text"
                 value={this.state.value}
                 onChange={this.handleChange.bind(this)}/>
        </label>
      </form>
    )
  }
}
