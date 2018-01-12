const initialState = {
  count: 0,
}

function reducer(state = initialState, action) {
  if (action.type == 'SET_COUNT') {
    state = {...state, count: action.value}
  }

  return state
}

export default reducer
