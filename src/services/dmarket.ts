import axios from 'axios'

export const dmarket = axios.create({
   baseURL:
      'https://cors-anywhere.herokuapp.com/https://api.dmarket.com/exchange/v1/market/items',
})
