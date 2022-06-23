import {createContext,  useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

// reducer
const userReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload
      }
    default:
      throw new Error(`类型 ${type} 错误`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}


export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {currentUser} = state

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

  // 注册监听器
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {currentUser, setCurrentUser}

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
