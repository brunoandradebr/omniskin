import axios from 'axios'

export const neshastore = axios.create({
   baseURL:
      'https://cors-anywhere.herokuapp.com/https://api.neshastore.com/items',
})
