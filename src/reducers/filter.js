import { SET_FILTER } from './../actions/filter';

const initialState = {
  type: SET_FILTER,
  filter: ''
}
function filter(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

export default filter