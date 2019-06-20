import * as UserService from '../services/UserService'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export function loginAction(credentials) {
  return (dispatch) => {
    return UserService.login(credentials)
      .then((result) => {
        dispatch(userLoggedInAction(result.user))
        return result
      })
  }
}

export function userLoggedInAction(user) {
  return {
    type: USER_LOGGED_IN,
    user
  }
}

export function logoutAction() {
  UserService.logout()
  return {
    type: USER_LOGGED_OUT
  }
}