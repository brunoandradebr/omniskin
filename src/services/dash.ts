import axios from 'axios'

export const dash = axios.create({
   baseURL:
      'https://thingproxy.freeboard.io/fetch/https://dashskins.com.br/api/listing',
})
