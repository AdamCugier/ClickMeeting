import useApi from "@/composables/useApi";

function parseLinkHeader(linkHeader: string) {
    return Object.fromEntries(linkHeader.split(", ").map(header => header.split("; ")).map(header => [header[1].replace(/"/g, "").replace("rel=", ""), header[0].slice(1, -1)]));
}

export interface MessageI {
    id: string
    title: string
    date: string
    sender: string
    email: string
    message: string
}

export interface PaginationI {
    first: string
    prev: string
    next: string
    last: string
}

export interface MsgsStoreI {
    messages: Array<MessageI>
    activeMessageId: string
    activePage: number
    links: PaginationI
    loading: boolean
    searchMsg: string
    msgModalToggle: boolean
}

const {fetchData} = useApi()
const msgsModule = {
    state: () => ({
        messages: [],
        activeMessageId: '',
        activePage: 1,
        links: {
            first: '',
            prev: '',
            next: '',
            last: ''
        },
        loading: false,
        searchMsg: '',
        msgModalToggle: false
    }),
    mutations: {
        UPDATE_MESSAGES(state: MsgsStoreI, data: Array<MessageI>) {
            state.messages = data
        },
        UPDATE_PAGINATION_LINKS(state: MsgsStoreI, data: PaginationI) {
            state.links = data
        },
        TOGGLE_LOADING(state: MsgsStoreI) {
            state.loading = !state.loading
        },
        TOGGLE_MSG_MODAL(state: MsgsStoreI) {
            state.msgModalToggle = !state.msgModalToggle
        },
        SET_ACTIVE_PAGE(state: MsgsStoreI, count: number) {
            state.activePage = count
        },
        SET_ACTIVE_MESSAGE_ID(state: MsgsStoreI, id: string) {
            state.activeMessageId = id
        },
        SET_SEARCH_MSG(state: MsgsStoreI, sentence: string) {
            state.searchMsg = sentence
        },
        CLEAR_SEARCH(state: MsgsStoreI) {
            state.searchMsg = ''
        },
    },
    actions: {
        async getMessages({commit, state} : {commit: Function, state: MsgsStoreI}) {
            commit('TOGGLE_LOADING')
            await fetchData(`messages?_page=${state.activePage}&_limit=10${state.searchMsg && `&q=${state.searchMsg}`}`).then(res => {
                const link = res.headers.get('Link')
                if (link) {
                    const paginationLinks = parseLinkHeader(link)
                    commit('UPDATE_PAGINATION_LINKS', paginationLinks)
                }
                return res.json()
            }).then(data => {
                commit('UPDATE_MESSAGES', data)
            }).catch((err) => {console.log(err);alert('ERROR ON FETCHING DATA')})
                .finally(() => commit('TOGGLE_LOADING'))
        }
    },
    getters: {
        activeMessage(state: MsgsStoreI): MessageI | undefined {
            return state.messages.find((mess: MessageI) => mess.id === state.activeMessageId)
        },
        lastPageNumber(state: MsgsStoreI): number {
            const index = state.links.last.indexOf('_page')
            const str = state.links.last.substring(index + 6, index + 10)
            const indexOfSpecialChar: number = str.indexOf('&')
            if (indexOfSpecialChar !== -1) {
                return parseInt(str.substring(0, indexOfSpecialChar))
            }
            return parseInt(str)
        }
    }
}
export default msgsModule