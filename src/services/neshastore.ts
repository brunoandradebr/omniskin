import axios from 'axios'

export const neshastore = axios.create({
   baseURL: 'https://corsproxy.io/?https://api.neshastore.com/items',
})
