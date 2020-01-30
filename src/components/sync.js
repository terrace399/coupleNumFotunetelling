import React, { Component } from 'react';

class InputForm extends React.Component {
  constructor (props) {
      super(props)
      this.state =
        {value: '',
         debug: 'デフォ'
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
      this.setState({value: e.target.value})
  }
  setRandomNums = () => {
    var randoms = Math.floor(Math.random() * 1000);

    this.setState({
      debug: randoms,
      value: randoms,
    });
  }
  render () {
      return (
          <div>
              <p>ステートの値：{this.state.value}</p>
              <p>デバッグの値：{this.state.debug}</p>
              <input value={this.state.value} onChange={this.handleChange} />
              <button onClick = {this.setRandomNums}></button>
          </div>
      )
  }
 }
export default InputForm;
