import axios from 'axios'

export const dmarket = axios.create({
   baseURL:
      'https://thingproxy.freeboard.io/fetch/https://api.dmarket.com/exchange/v1/market/items',
})
