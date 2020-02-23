export const style = {
    state: {
        primaryColor: '#1976D2',
        titleColor: '#333'
    },
    mutations: {
        'SET_PRIMARY_COLOR' (state , color){
            state.primaryColor = color
        },
        'SET_TITLE_COLOR' (state, color) {
            state.titleColor = color
        }
    },
    actions: {
        setPrimaryColor({commit},primaryColor){
            commit('SET_PRIMARY_COLOR',primaryColor)
        },
        setTitleColor({commit},titleColor){
            commit('SET_TITLE_COLOR',titleColor)
        }
    }
}
