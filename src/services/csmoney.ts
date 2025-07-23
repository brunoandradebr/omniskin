import axios from 'axios'

export const csmoney = axios.create({
  baseURL: 'https://corsproxy.io/?https://cs.money/2.0/market/sell-orders',
})
