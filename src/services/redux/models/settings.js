import { action } from 'easy-peasy';

export default {
  properties: {
    lang: 'en',
    direction: 'ltr'
  },
  setProperties: action((state, payload) => {
    state.properties = { ...state.properties, ...payload }
    })
}
