import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/store";
import './assets/main.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faQuinscape} from "@fortawesome/free-brands-svg-icons";
import {faHouseChimneyWindow, faMessage, faPowerOff, faChevronLeft, faChevronRight, faAnglesRight, faAnglesLeft} from "@fortawesome/free-solid-svg-icons";


library.add(faQuinscape)
library.add(faHouseChimneyWindow)
library.add(faMessage)
library.add(faMessage)
library.add(faPowerOff)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faAnglesLeft)
library.add(faAnglesRight)

const app = createApp(App)

app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
