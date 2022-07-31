import { quotation } from './quotation'
import { csmoney } from './csmoney'
import { dmarket } from './dmarket'
import { neshastore } from './neshastore'
import { dash } from './dash'
import * as fns from 'date-fns'

import {
   IApiParams,
   TSkins,
   ISkin,
   ICsmoneySkin,
   IDmarketSkin,
   INeshastoreSkin,
   IDashSkin,
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

   formatLockInterval: (intervalObject: any, addDayAmount = 0) =>
      intervalObject
         ? intervalObject.days > 0
            ? intervalObject.days + addDayAmount + 'd'
            : intervalObject.hours > 0
            ? intervalObject.hours + 'h'
            : intervalObject.minutes + 'min'
         : null,

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
         stores: [],
      }

      const params: IApiParams = { ...defaultParams, ...searchParams }

      // csgomoney skins
      const { data: csmoneyResponse } = await csmoney.get(
         `?buyBonus=35&isStore=true&name=${params?.name}&limit=${params?.limit}&offset=0&order=${params?.order}&sort=${params?.sort}&withStack=true`
      )
      const { items: csmoneyItems } = csmoneyResponse

      const csmoneySkins: TSkins = csmoneyItems.map((item: ICsmoneySkin) => {
         const lockInterval = item.tradeLock
            ? fns.intervalToDuration({
                 start: new Date(),
                 end: new Date(item.tradeLock),
              })
            : null

         return {
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
            inspect: `steam://rungame/730/76561202255233023/+csgo_econ_action_preview S${item.steamId}A${item.assetId}D${item.inspect}`,
            availableAt: api.formatLockInterval(lockInterval),
         }
      })

      // dmarket skins
      const { data: dmarketResponse } = await dmarket.get(
         `?side=market&title=${params.name}&priceFrom=0&priceTo=0&gameId=a8db&types=dmarket&cursor&platform=browser&isLoggedIn=false&orderDir=${params?.order}&orderBy=${params?.sort}&limit=${params?.limit}&currency=USD&treeFilters=exterior[]=factory new,exterior[]=minimal wear,exterior[]=field-tested,exterior[]=well-worn,exterior[]=battle-scarred`
      )
      const { cursor, objects: dmarketItems } = dmarketResponse

      const dmarketSkins: TSkins = dmarketItems.map((item: IDmarketSkin) => {
         const lockInterval =
            item.extra.tradeLockDuration &&
            fns.intervalToDuration({
               start: 0,
               end: item.extra.tradeLockDuration * 1000,
            })

         return {
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
            inspect: item.extra.inspectInGame,
            availableAt: api.formatLockInterval(lockInterval),
         }
      })

      // dash skins
      const { data: dashResponse } = await dash.get(
         `?search=${params.name}&sort_by=${params.sort}&sort_dir=${params.order}&limit=${params.limit}&page=1`
      )
      const { results: dashItems } = dashResponse

      const dashSkins: TSkins = dashItems.map((item: IDashSkin) => {
         const qualityDescription = item.market_hash_name
            .match(/\((.*?)\)/)
            ?.pop()

         let skinQuality = qualityDescription?.includes('-')
            ? qualityDescription
                 .split('-')
                 .map((word) => word[0])
                 .join(',')
                 .replace(',', '')
            : qualityDescription
                 ?.split(' ')
                 .map((word) => word[0])
                 .join(',')
                 .replace(',', '')

         if (item.wear_data.paintindex === -1 && item.wear_data.floatvalue >= 0)
            skinQuality = '★'

         const lockInterval =
            new Date() < fns.parseISO(item.availableAt) &&
            fns.intervalToDuration({
               start: new Date(),
               end: fns.parseISO(item.availableAt),
            })

         return {
            id: item._id,
            store: {
               name: 'dashskins',
               url: 'https://dashskins.com.br/',
               icon: 'https://raichu-uploads.s3.amazonaws.com/logo_dash-skins_mxE7PD.png',
               skinUrl: `https://dashskins.com.br/item/1/${item._id}`,
            },
            name: item.market_hash_name,
            float: item.wear_data.floatvalue,
            price: item.price / dolar,
            priceFormated: api.formatCurrency(item.price),
            pattern: item.wear_data.paintseed,
            quality: skinQuality,
            image: `https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`,
            inspect: `steam://rungame/730/76561202255233023/+csgo_econ_action_preview S${
               item.bot.steamID64
            }A${item.assetid}D${item.market_actions[0]?.link.split('D').pop()}`,
            availableAt: api.formatLockInterval(lockInterval, 1),
         }
      })

      // neshastore skins
      let neshaSortOrder = 1
      if (params.sort === 'price' && params.order === 'asc') neshaSortOrder = 1
      if (params.sort === 'price' && params.order === 'desc') neshaSortOrder = 2
      if (params.sort === 'float' && params.order === 'asc') neshaSortOrder = 3
      // neshastore do not sort items by greater float, so, repeat order by lower price
      if (params.sort === 'price' && params.order === 'asc') neshaSortOrder = 1

      const { data: neshastoreResponse } = await neshastore.get(
         `?query=${params.name}&orderBy[]=${neshaSortOrder}&limit=${params.limit}&tradeLocked=true`
      )
      const { items: neshastoreItems } = neshastoreResponse

      const neshastoreSkins: TSkins = neshastoreItems.map(
         (item: INeshastoreSkin) => {
            const lockInterval =
               new Date() < fns.parseISO(item.tradelockExpiration) &&
               fns.intervalToDuration({
                  start: new Date(),
                  end: fns.parseISO(item.tradelockExpiration),
               })

            return {
               id: String(item.id),
               store: {
                  name: 'neshastore',
                  url: 'https://neshastore.com/',
                  icon: 'https://i.ibb.co/MM51ZSZ/Logo-Nesha-sem-fundo.png',
                  skinUrl: `https://neshastore.com/csgo/${item.category}/${item.slugType}/${item.slug}?itemId=${item.id}`,
               },
               name: item.marketHashName,
               float: item.float,
               price: Number(item.price) / dolar,
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
               inspect: item.inspectLink,
               availableAt: api.formatLockInterval(lockInterval, 2),
            }
         }
      )

      let allSkins: TSkins = []

      if (params.stores && params.stores.length) {
         params.stores?.includes('csmoney') && allSkins.push(...csmoneySkins)
         params.stores?.includes('dmarket') && allSkins.push(...dmarketSkins)
         params.stores?.includes('neshastore') &&
            allSkins.push(...neshastoreSkins)
         params.stores?.includes('dash') && allSkins.push(...dashSkins)
      } else {
         allSkins = [
            ...csmoneySkins,
            ...dmarketSkins,
            ...neshastoreSkins,
            ...dashSkins,
         ]
      }

      const sorted = api.sortSkins(
         allSkins,
         params.sort ?? 'price',
         params.order ?? 'desc'
      )

      return sorted
   },
}
