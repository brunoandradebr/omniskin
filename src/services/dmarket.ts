import axios from 'axios'

export const dmarket = axios.create({
   baseURL: 'https://corsproxy.io/?https://api.dmarket.com/exchange/v1/market/',
})
