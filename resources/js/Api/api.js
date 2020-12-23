import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:8888/api'
})
const Api = function(){
    return api
}

export default Api