import axios from 'axios'

export const dash = axios.create({
   baseURL: 'https://corsproxy.io/?https://dashskins.com.br/api/listing',
})
