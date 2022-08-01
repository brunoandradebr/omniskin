import axios from 'axios'

export const csmoney = axios.create({
   baseURL:
      'https://thingproxy.freeboard.io/fetch/https://inventories.cs.money/5.0/load_bots_inventory/730',
})
