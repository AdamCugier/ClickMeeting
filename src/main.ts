import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/store";
import './assets/main.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faQuinscape} from "@fortawesome/free-brands-svg-icons";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {faBars, faHouseChimneyWindow, faMessage, faPowerOff, faChevronLeft, faChevronRight, faAnglesRight, faAnglesLeft, faMagnifyingGlass, faXmark, faKey, faPaperPlane} from "@fortawesome/free-solid-svg-icons";


library.add(faBars)
library.add(faQuinscape)
library.add(faHouseChimneyWindow)
library.add(faMessage)
library.add(faMessage)
library.add(faPowerOff)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faAnglesLeft)
library.add(faAnglesRight)
library.add(faMagnifyingGlass)
library.add(faCircleXmark)
library.add(faXmark)
library.add(faKey)
library.add(faPaperPlane)

const app = createApp(App)

app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
