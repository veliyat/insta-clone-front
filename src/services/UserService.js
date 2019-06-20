import axios from 'axios'
import { baseUrl } from '../config/api'

const loginUrl = baseUrl + '/login'

export function login(credentials) {
  return axios.post(loginUrl, credentials)
    .then(result => {
      localStorage.setItem('user', JSON.stringify(result.data.user))
      return result.data
    })
}

export function logout() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}