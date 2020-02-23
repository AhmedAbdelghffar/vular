export const user = {
  state: {
    userToken: '',
    userName: '',
    userEmail: ''
  },
  mutations: {
    'SET_USER_TOKEN' (state , token){
      state.userToken = token
    },
    'SET_USER_NAME' (state, userName) {
      state.userName = userName
    },
    'SET_USER_EMAIL' (state,userEmail) {
      state.userEmail = userEmail
    }
  },
  actions: {
    setUserToken({commit},token){
      commit('SET_USER_TOKEN',token)
    },
    setUserName({commit},userName){
      commit('SET_USER_NAME',userName)
    },
    setUserEmail({commit},userEmail){
      commit('SET_USER_EMAIL',userEmail)
    }
  }
}
