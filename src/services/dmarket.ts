import axios from 'axios'

export const dmarket = axios.create({
  baseURL:
    'https://api.allorigins.win/raw?url=https://api.dmarket.com/exchange/v1/market/items',
})
