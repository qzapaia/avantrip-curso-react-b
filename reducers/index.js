
const initialState = {
  repos:[]
}

export default function repos(state = initialState, action){
  switch (action.type) {
    case 'SET_REPOS':
      return Object.assign({},state,{
        repos:action.payload
      })
    default:
      state;
  }

  return state;
}
