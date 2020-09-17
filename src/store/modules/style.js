export const style = {
    state: {
        primaryColor: '#1976D2',
        sidebarColor: '#232b2b',
        sidebarMini: false,
        sidebarExpandOnHover: false,
        routerAnimations: 'fade'
    },
    mutations: {
        'SET_PRIMARY_COLOR' (state , primaryColor){
            state.primaryColor = primaryColor
        },
        'SET_SIDEBAR_COLOR' (state, sidebarColor) {
            state.sidebarColor = sidebarColor
        },
        'SET_SIDEBAR_MINI' (state, sidebarMini) {
            state.sidebarMini = sidebarMini
        },
        'SET_SIDEBAR_EXPAND_ON_HOVER' (state, sidebarExpandOnHover) {
            state.sidebarExpandOnHover = sidebarExpandOnHover
        },
        'SET_ROUTER_ANIMATION' (state, routerAnimations) {
            state.routerAnimations = routerAnimations
        },
    },
    actions: {
        setPrimaryColor({commit},primaryColor){
            commit('SET_PRIMARY_COLOR',primaryColor)
        },
        setSidebarColor({commit},sidebarColor){
            commit('SET_SIDEBAR_COLOR',sidebarColor)
        },
        setSidebarMini({commit},sidebarMini){
            commit('SET_SIDEBAR_MINI',sidebarMini)
        },
        setsSidebarExpandOnHover({commit},SideBarExpandOnHover){
            commit('SET_SIDEBAR_EXPAND_ON_HOVER',SideBarExpandOnHover)
        },
        setRouterAnimations({commit},routerAnimations){
            commit('SET_ROUTER_ANIMATION',routerAnimations)
        }
    }
}
