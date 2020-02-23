import store from '../store/index'
export default class common {
    static logOut() {
        store.dispatch('setUserToken', null)
        store.dispatch('setUserName', null)
        store.dispatch('setUserEmail', null)
        localStorage.setItem('userToken', '')
        localStorage.setItem('userEmail', '')
        localStorage.setItem('userToken', '')
        window.location.href = "/"
    }
}