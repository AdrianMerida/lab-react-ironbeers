import axios from 'axios'

const http = axios.create({baseURL: process.env.URL})

const list = () => http.get('/').then(res => res.data)
const random = () => http.get('/random').then(res => res.data)
const detail = (id) => http.get(`${id}`).then(res => res.data)
const create = (item) => http.post('/new').then(res => res.data)
const search = (query) => http.get(`/search?q=${query}`).then(res => res.data)



export default {
    list,
    random,
    detail,
    create,
    search
}