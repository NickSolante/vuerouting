import api from '../../api/imgur'
import qs from 'qs'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => {
    api.login()
  },

  finalizeLogin({ commit }, hash) {
    const qString = qs.parse(hash.replace('#', ''))

    commit('setToken', qString.access_token)

    window.localStorage.setItem('imgur_token', qString.access_token)
  },

  logout: ({ commit }) => {
    commit('setToken', null)
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
