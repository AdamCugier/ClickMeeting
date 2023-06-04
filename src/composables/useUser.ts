import {computed, ref} from "vue";
import type {Ref} from 'vue'
import router from "@/router";
import useApi from "@/composables/useApi";

interface UserI {
    id: number | null,
    name: string,
    login: string
}

interface useUserI {
    user: Ref<UserI>
    saveUserSession: (id: number) => void,
    closeUserSession: () => void
}

const useUser = (): useUserI => {
    const user: Ref<UserI> = ref({
        id: null,
        name: "",
        login: "",
    })

    const {fetchData} = useApi()

    const loggedUserId: string | null = window.localStorage.getItem('user')
    const userIsLogged = computed((): boolean => !!loggedUserId)

    const saveUserSession = (id: number) => {
        window.localStorage.setItem('user', id.toString())
    }

    const closeUserSession = () => {
        window.localStorage.removeItem('user')
        router.push({name: 'loginPage'})
    }

    const getUserData = (id: number) => {
        fetchData(`users/${id}`).then(res => user.value = res)
    }

    const init = async () => {
        if (userIsLogged.value) {
            await getUserData(parseInt(loggedUserId as string))
        } else {
            router.push({name: 'loginPage'})
        }
    }

    init();

    return {
        user,
        saveUserSession,
        closeUserSession
    }
}
export default useUser;