// @ts-ignore
import {createStore} from "vuex";
import navModule from "@/store/Nav/NavModule";
import userModule from "@/store/User/UserModule";
import msgsModule from "@/store/Messages/MsgsModule";

export default createStore({
    modules: {
        navModule,
        userModule,
        msgsModule
    }
})