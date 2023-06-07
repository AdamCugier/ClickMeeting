import moment from "moment/moment";

interface useFunctions {
    formatDate: (date: string) => string
}
const useFunctions = () => {
    const formatDate = (date: string) => {
        const d = new Date(date)
        return moment(d).format('DD/MM/YY HH:mm')
    }
    return {
        formatDate
    }
}

export default useFunctions;