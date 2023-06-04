interface FetchDataI {
    method: string,
    headers: { "Content-Type": string; },
    body?: any
}

interface useApiI {
    fetchData: (url: string, body?: any, method?: string) => Promise<any>
}

const useApi = (): useApiI => {
    const fetchData = async (url: string, body: any = null, method: string = 'GET') => {
        const options: FetchDataI = {
            method,
            headers: {"Content-Type": "application/json"},
        }
        if (body) options.body = JSON.stringify(body)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, options);
        return await response.json();
    }

    return {
        fetchData
    }
}
export default useApi;