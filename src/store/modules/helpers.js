export const helpers = {
    state: {
        snackbarMessage:'',
        loader: false,
        logo: ''
    },
    mutations: {
        SET_SNACKBAR_MESSAGE (state,snackbarMessage) {
            state.snackbarMessage = snackbarMessage
            setTimeout(()=>{
                state.snackbarMessage = ''
            },5000)
        },
        SET_LOADER(state,loader) {
            state.loader = loader
        },
        SET_LOGO(state,logo) {
            state.logo = logo
        }
    },
    actions: {
        setSnackBarMessage({commit},snackbarMessage) {
            commit('SET_SNACKBAR_MESSAGE', snackbarMessage)
        },
        setLoader({commit},loader) {
            commit('SET_LOADER', loader)
        },
        setLogo({commit},logo) {
            commit('SET_LOGO', logo)
        }
    }
}
