import useApi from "@/composables/useApi";

function parseLinkHeader(linkHeader: string) {
    return Object.fromEntries(linkHeader.split(", ").map(header => header.split("; ")).map(header => [header[1].replace(/"/g, "").replace("rel=", ""), header[0].slice(1, -1)]));
}

export interface MessageI {
    id: string
    title: string
    date: Date
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
        searchMsg: ''
    }),
    mutations: {
        UPDATE_MESSAGES(state, data: Array<MessageI>) {
            state.messages = data
        },
        UPDATE_PAGINATION_LINKS(state, data: PaginationI) {
            state.links = data
        },
        TOOGLE_LOADING(state) {
            state.loading = !state.loading
        },
        SET_ACTIVE_PAGE(state, count: number) {
            state.activePage = count
        },
        SET_SEARCH_MSG(state, sentence: string) {
            state.searchMsg = sentence
        },
        CLEAR_SEARCH(state) {
            state.searchMsg = ''
        },
    },
    actions: {
        async getMessages({commit, state}) {
            commit('TOOGLE_LOADING')
            await fetchData(`messages?_page=${state.activePage}&_limit=20${state.searchMsg && `q=${state.searchMsg}`}`).then(res => {
                const paginationLinks = parseLinkHeader(res.headers.get('Link'))
                commit('UPDATE_PAGINATION_LINKS', paginationLinks)
                return res.json()
            }).then(data => {
                console.log(data)
                commit('UPDATE_MESSAGES', data)
            }).catch(() => alert('ERROR ON FETCHING DATA'))
                .finally(() => commit('TOOGLE_LOADING'))
        }
    },
    getters: {
        activeMessage(state: MsgsStoreI): MessageI | undefined {
            return state.messages.find((mess: MessageI) => mess.id === state.activeMessageId)
        },
        lastPageNumber(state: MsgsStoreI): number {
            const index = state.links.last.indexOf('_page')
            const str = state.links.last.substring(index + 6, index + 9)
            const indexOfSpecialChar: number = str.indexOf('&')
            if (indexOfSpecialChar !== -1) {
                return parseInt(str.substring(0, indexOfSpecialChar))
            }
            return parseInt(str)
        }
    }
}
export default msgsModule