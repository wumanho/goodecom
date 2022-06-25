export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const INITIAL_STATE = {
  currentUser: null
}

// reducer
export const userReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload
      }
    default:
      return state
  }
}

