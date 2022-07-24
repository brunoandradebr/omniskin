import { quotation } from './quotation'
import { csmoney } from './csmoney'
import { dmarket } from './dmarket'
import { neshastore } from './neshastore'

import {
   IApiParams,
   TSkins,
   ISkin,
   ICsmoneySkin,
   IDmarketSkin,
   INeshastoreSkin,
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
            skinUrl: `https://cs.money/pt/csgo/store/?search=${item.fullName}&pattern=${item.pattern}`,
         },
         name: item.fullName,
         float: item.float,
         price: item.price,
         priceFormated: api.formatCurrency(item.price * dolar),
         pattern: item.pattern,
         quality: item.quality && item.quality.toUpperCase(),
         image: item.steamImg,
      }))

      // dmarket skins
      const { data: dmarketResponse } = await dmarket.get(
         `?side=market&title=${params.name}&priceFrom=0&priceTo=0&gameId=a8db&types=dmarket&cursor&platform=browser&isLoggedIn=false&orderDir=${params?.order}&orderBy=${params?.sort}&limit=${params?.limit}&currency=USD&treeFilters=exterior[]=factory new,exterior[]=minimal wear,exterior[]=field-tested,exterior[]=well-worn,exterior[]=battle-scarred`
      )
      const { cursor, objects: dmarketItems } = dmarketResponse

      const dmarketSkins: TSkins = dmarketItems.map((item: IDmarketSkin) => ({
         id: item.itemId,
         store: {
            name: 'dmarket',
            url: 'https://dmarket.com/',
            icon: 'https://cdn-front-static.dmarket.com/prod/v1-209-2/assets/img/fav.ico',
            skinUrl: `https://dmarket.com/ingame-items/item-list/csgo-skins?userOfferId=${item.extra.linkId}`,
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
                    .toUpperCase()
               : item.extra.exterior
                    .split(' ')
                    .map((word) => word[0])
                    .join()
                    .replace(',', '')
                    .toUpperCase(),
         image: item.image,
      }))

      // neshastore skins
      let neshaSortOrder = 1
      if (params.sort === 'price' && params.order === 'asc') neshaSortOrder = 1
      if (params.sort === 'price' && params.order === 'desc') neshaSortOrder = 2
      if (params.sort === 'float' && params.order === 'asc') neshaSortOrder = 3
      // neshastore do not sort items by greater float, so, repeat order by lower price
      if (params.sort === 'float' && params.order === 'desc') neshaSortOrder = 1

      const { data: neshastoreResponse } = await neshastore.get(
         `?query=${params.name}&orderBy[]=${neshaSortOrder}&limit=60`
      )
      const { items: neshastoreItems } = neshastoreResponse

      const neshastoreSkins: TSkins = neshastoreItems.map(
         (item: INeshastoreSkin) => ({
            id: String(item.id),
            store: {
               name: 'neshastore',
               url: 'https://neshastore.com/',
               icon: 'https://pbs.twimg.com/profile_images/1549726131187851265/Amzwqptd_400x400.jpg',
               skinUrl: `https://neshastore.com/csgo/${item.category}/${item.slugType}/${item.slug}?itemId=${item.id}`,
            },
            name: item.marketHashName,
            float: item.float,
            price: item.price,
            priceFormated: api.formatCurrency(Number(item.price)),
            pattern: item.paintSeed,
            quality:
               item.wearName && item.wearName.includes('-')
                  ? item.wearName &&
                    item.wearName
                       .split('-')
                       .map((word) => word[0])
                       .join()
                       .replace(',', '')
                       .toUpperCase()
                  : item.wearName &&
                    item.wearName
                       .split(' ')
                       .map((word) => word[0])
                       .join()
                       .replace(',', '')
                       .toUpperCase(),
            image: item.img,
         })
      )

      const allSkins: TSkins = [
         ...csmoneySkins,
         ...dmarketSkins,
         ...neshastoreSkins,
      ]

      const sorted = api.sortSkins(
         allSkins,
         params.sort ?? 'price',
         params.order ?? 'desc'
      )

      return sorted
   },
}
