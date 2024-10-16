import axios from "axios";

const createService = (url) => {
    const service = axios.create({baseURL:url})
    
    service.interceptors.request.use(config => config,
        error => Promise.reject(error)
    )
    service.interceptors.response.use(response =>  response,
    error => Promise.reject(error.response || error)
)
    return service
}
let baseUrl = "https://kevinmisati.pythonanywhere.com/api/"

export let apiService = createService(baseUrl)
