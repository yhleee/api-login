import { axios } from 'common/utils'
import { LoginForm } from '../types/entities/login'

export const getAuthentication = async (loginForm: LoginForm) => {
  const response = await axios.get(`/api/login/check?id=${loginForm.id}&pw=${loginForm.pw}`)
  return response && response.data
}
