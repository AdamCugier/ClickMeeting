export interface UserI {
    id: number | null,
    name: string,
    login: string
}
export interface UserStoreI{
    user: UserI
}

const userModule = {
    state: (): UserStoreI => ({
        user: {
            id: null,
            name: "",
            login: "",
        }
    }),
    mutations: {
        updateUser(state: UserStoreI, payload: UserI) {
            state.user = payload
        }
    },
    actions: {},
    getters: {}
}
export default userModule