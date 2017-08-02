const GET_REPOS = 'GET_REPOS';
const SET_REPOS = 'SET_REPOS';

export function getRepos(username){
  return dispatch => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res=>res.json())
      .then(repos=>dispatch(setRepos(repos)))
  }
}

export function setRepos(repos){
  return {
    type:SET_REPOS,
    payload:repos
  }
}
