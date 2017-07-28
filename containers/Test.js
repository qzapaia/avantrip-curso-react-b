import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

export default class extends Component {
  constructor(){
    super()
  }
  render() {
    return <h1>
      <Link to="/test">Link to Test</Link>
      Test
    </h1>;
  }
}
