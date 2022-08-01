import axios from 'axios'

export const dash = axios.create({
   baseURL:
      'https://cors-anywhere.herokuapp.com/https://dashskins.com.br/api/listing',
})
