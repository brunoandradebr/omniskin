import axios from 'axios'

export const quotation = axios.create({
   baseURL: 'https://economia.awesomeapi.com.br/json/',
})
