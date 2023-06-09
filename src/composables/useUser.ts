import {computed} from "vue";
import router from "@/router";
import useApi from "@/composables/useApi";
// @ts-ignore
import {useStore} from "vuex";
import type {UserI} from "@/store/User/UserModule";

interface useUserI {
    saveUserSession: (id: number) => void,
    closeUserSession: () => void
    authUser: (login: string, pass: string) => Promise<number>
}

const useUser = (): useUserI => {
    const store = useStore()
    const {fetchData} = useApi()

    const loggedUserId: string | null = window.localStorage.getItem('user')
    const userIsLogged = computed((): boolean => !!loggedUserId)

    const saveUserSession = async (id: number) => {
        window.localStorage.setItem('user', id.toString())
        await getUserData(id)
    }

    const closeUserSession = () => {
        window.localStorage.removeItem('user')
        router.push({name: 'loginPage'})
    }

    const getUserData = async (id: number) => {
        await fetchData(`users/${id}`).then(res => res.json()).then(data => store.commit('UPDATE_USER', data))
            .catch(() => alert('Błąd podczas pobierania użytkownika'))
    }

    const authUser = async (login: string, pass: string) => {
        const user =  await fetchData(`users?login=${login}&password=${pass}`).then(res => res.json())
            .catch(() => alert('Błąd podczas autoryzacji użytkownika'))
        if (user.length !== 0) {
            return user[0].id
        } else {
            return 0
        }
    }

    const init = async () => {
        if (userIsLogged.value) {
            if (!store.state.userModule.user.id)
                await getUserData(parseInt(loggedUserId as string))
        } else {
            router.push({name: 'loginPage'})
        }
    }
    init();

    return {
        saveUserSession,
        closeUserSession,
        authUser,
    }
}
export default useUser;