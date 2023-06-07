//@ts-ignore
import {useStore} from "vuex";

interface useFunctions {
    openMessage: (id: string) => Promise<void>
}
const useMessage = () => {
    const {commit} = useStore()
    const openMessage = async (id: string) => {
        await commit('SET_ACTIVE_MESSAGE_ID', id)
        await commit('TOGGLE_MSG_MODAL')
    }
    return {
        openMessage
    }
}

export default useMessage;