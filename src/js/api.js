import axios from 'axios'
const http = 'http://docapi.ogemray-server.com'

function axiosGET(url, params) {
    return axios.get(http+url, params)
}

export default axiosGET