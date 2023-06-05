import {computed} from "vue";
import router from "@/router";
import useApi from "@/composables/useApi";
import {useStore} from "vuex";

interface useUserI {
    saveUserSession: (id: number) => void,
    closeUserSession: () => void
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
        await fetchData(`users/${id}`).then(res => res.json()).then(data => store.commit('updateUser', data))
            .catch(() => alert('Bład podczas pobierania uzytkownika'))
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
        closeUserSession
    }
}
export default useUser;