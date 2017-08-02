import React, {Component} from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux'
import { getRepos } from '../actions/repos';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      dato:'inicial'
    }
  }
  render() {
    const { getReposFromGithub } = this.props;

    return <Header dato={this.state.dato}
                   cuandoAlguienTeHagaClick={()=>{ getReposFromGithub('qzapaia') }}
                   lista={this.props.reposDelState}>
              <h1>Hola</h1>
              <h2>Chau</h2>
           </Header>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reposDelState:state.repos
  }
}

const mapDispatchToProps = {
  getReposFromGithub: getRepos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
