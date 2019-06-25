import { SearchForm } from 'common/types/entities/search'
import { LoginForm } from 'common/types/entities/login'

export interface LoginConditionParamsState {
  //loginForm: SearchForm
  loginForm: LoginForm
}

const initialState: LoginConditionParamsState = {
  loginForm: {
    id: '',
    pw: '',
  },
}

const RESET = 'Layout/LoginConditionParams/RESET'
const UPDATE = 'Layout/LoginConditionParams/UPDATE'

export const resetLoginConditionParams = () => {
  return {
    type: RESET,
  }
}

export const updateLoginConditionParams = (loginConditionParamsState: LoginConditionParamsState) => dispatch => {
  dispatch({
    state: loginConditionParamsState,
    type: UPDATE,
  })
}

const loginConditionParams = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.state,
      }
    case RESET:
      return initialState
    default:
      return state
  }
}

export default loginConditionParams
