import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : null,
    authIsReady: false,
    loginTime:'',
    logoutTime:'',
    loginAttempts : 0,
    agreedToPrivacy: false
  },
  mutations: {
    setUser(state,payload){
      state.user=payload
      console.info('User state changed ',state.user)
    },
    setAuthIsReady(state,payload){
      state.authIsReady=payload
    },
    setLoginTime(state,payload){
      state.loginTime=payload
    },
    agreePrivacyPolicy(state) {
      localStorage.setItem('agreedToPrivacy', true);
      state.agreedToPrivacy = true;
    },
    initialiseStore(state) {
      if (localStorage.getItem('agreedToPrivacy')) {
        state.agreedToPrivacy = true;
      }
    },
  },
  actions: {
  },
  getters:{
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`
    }
  },
  modules: {
  }
})
