const initialState = {
  view: 'ABOUT',
}

function reducer(state = initialState, action) {
  if (action.type == 'SET_VIEW') {
    state = {...state, view: action.value}
  }

  return state
}

export default reducer
