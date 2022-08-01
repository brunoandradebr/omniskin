import axios from 'axios'

export const neshastore = axios.create({
   baseURL:
      'https://thingproxy.freeboard.io/fetch/https://api.neshastore.com/items',
})
