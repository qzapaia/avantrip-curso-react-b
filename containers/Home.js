import React, {Component} from 'react';
import Header from '../components/Header';

export default class extends Component {
  constructor(){
    super()
    this.state = {
      dato:'inicial'
    }
  }
  render() {
    return <Header dato={this.state.dato}
                   cuandoAlguienTeHagaClick={()=>{ this.setState({ dato:'nuevo' + Math.random() }) }}
                   lista={[23,45,67,912]}>
              <h1>Hola</h1>
              <h2>Chau</h2>
           </Header>;
  }
}
