import { quotation } from './quotation'
import { csmoney } from './csmoney'
import { dmarket } from './dmarket'

import {
   IApiParams,
   TSkins,
   ISkin,
   ICsmoneySkin,
   IDmarketSkin,
   TSort,
   TOrder,
} from './types/api'

let dolar = 0

export const api = {
   initialized: false,

   init: async () => {
      const {
         data: {
            USDBRL: { bid: dolarPrice },
         },
      } = await quotation.get('last/USD-BRL')
      dolar = Number(dolarPrice)
      api.initialized = true
   },

   formatCurrency: (price: number) => {
      return price.toLocaleString('pt-BR', {
         minimumFractionDigits: 2,
         style: 'currency',
         currency: 'BRL',
      })
   },

   sortSkins: (skins: TSkins, field: TSort, order: TOrder) => {
      // prettier-ignore
      return skins.sort((a: ISkin, b: ISkin) =>
         order === 'desc'
            ? b[field] - a[field]
            : a[field] - b[field]
      )
   },

   get: async (searchParams?: IApiParams) => {
      if (api.initialized === false) {
         await api.init()
         console.log('aqui')
      }

      const defaultParams: IApiParams = {
         name: '',
         limit: 60,
         order: 'desc',
         sort: 'price',
      }

      const params: IApiParams = { ...defaultParams, ...searchParams }

      // csgomoney skins
      const { data: csmoneyResponse } = await csmoney.get(
         `?buyBonus=35&isStore=true&name=${params?.name}&limit=${params?.limit}&offset=0&order=${params?.order}&sort=${params?.sort}&withStack=true`
      )
      const { items: csmoneyItems } = csmoneyResponse

      const csmoneySkins: TSkins = csmoneyItems.map((item: ICsmoneySkin) => ({
         id: String(item.id),
         store: {
            name: 'csmoney',
            url: 'https://cs.money',
            icon: 'https://cs.money/img/favicon.png',
         },
         name: item.fullName,
         float: item.float,
         price: item.price,
         priceFormated: api.formatCurrency(item.price * dolar),
         pattern: item.pattern,
         quality: item.quality,
         image: item.steamImg,
      }))

      // dmarket skins
      const { data: dmarketResponse } = await dmarket.get(
         `items?side=market&title=${params.name}&priceFrom=0&priceTo=0&gameId=a8db&types=dmarket&cursor&platform=browser&isLoggedIn=false&orderDir=${params?.order}&orderBy=${params?.sort}&limit=${params?.limit}&currency=USD&treeFilters=exterior[]=factory new,exterior[]=minimal wear,exterior[]=field-tested,exterior[]=well-worn,exterior[]=battle-scarred`
      )
      const { cursor, objects: dmarketItems } = dmarketResponse

      const dmarketSkins: TSkins = dmarketItems.map((item: IDmarketSkin) => ({
         id: item.itemId,
         store: {
            name: 'dmarket',
            url: 'https://dmarket.com/',
            icon: 'https://cdn-front-static.dmarket.com/prod/v1-209-2/assets/img/fav.ico',
         },
         name: item.title,
         float: item.extra.floatValue,
         price: Number(item.price.USD) / 100,
         priceFormated: api.formatCurrency(
            (Number(item.price.USD) / 100) * dolar
         ),
         pattern: item.extra.paintSeed,
         quality:
            item.extra.exterior && item.extra.exterior.includes('-')
               ? item.extra.exterior
                    .split('-')
                    .map((word) => word[0])
                    .join()
                    .replace(',', '')
               : item.extra.exterior
                    .split(' ')
                    .map((word) => word[0])
                    .join()
                    .replace(',', ''),
         image: item.image,
      }))

      const allSkins: TSkins = [...csmoneySkins, ...dmarketSkins]

      const sorted = api.sortSkins(
         allSkins,
         params.sort ?? 'price',
         params.order ?? 'desc'
      )

      return sorted
   },
}
