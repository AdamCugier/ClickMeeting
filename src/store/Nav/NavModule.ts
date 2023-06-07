interface NavStoreI {
    toggleNav: boolean
}

const navModule = {
    state: () => ({
        toggleNav: false
    }),
    mutations: {
        TOGGLE_NAV(state: NavStoreI) {
            state.toggleNav = !state.toggleNav
        },
    },
    actions: {},
    getters: {}
}
export default navModule