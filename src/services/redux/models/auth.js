import { action } from 'easy-peasy'

export default {
  user: null,
  token: null,
  setUser: action((state, payload) => {
    state.user = payload
  }),
  setToken: action((state, payload) => {
    state.token = payload
  })
}
