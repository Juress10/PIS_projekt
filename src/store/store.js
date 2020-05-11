
const state = {
  URL: 'http://localhost:5001/ezcar-insurance/us-central1/app',
  user: null
}

const getters = {
  getURL: (state) => state.URL,
  isLogged (state) {
    if (state.user == null) {
      return false
    } else {
      return true
    }
  }
}

const mutations = { // this.$store.commit('setUser', 'Janko')
  setUser: (state, user) => {
    state.user = user
  }
}

const actions = {
  setAsyncUser (state, user) {
    state.dispatch('setUser', user)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
