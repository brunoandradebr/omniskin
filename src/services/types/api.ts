export interface ICsmoneySkin {
   _3d: string
   appId: number
   assetId: number
   collection: string
   float: string
   fullName: string
   hasHighDemand: boolean
   hasScreenshot: boolean
   id: string
   img: string
   inspect: string
   isStatTrak: boolean
   nameId: number
   overpay: string
   overprice: string
   pattern: number
   preview: string
   price: number
   quality: string
   rank: string
   rarity: string
   screenshot: string
   steamId: string
   steamImg: string
   stickers: string
   tradeLock: number
   type: number
   userId: string
}

export interface IDmarketSkin {
   amount: number
   classId: string
   description: string
   discount: number
   extra: {
      category: string
      collection: string[]
      exterior: string
      floatValue: number
      gameId: string
      groupId: string
      inGameAssetID: string
      inspectInGame: string
      isNew: boolean
      itemType: string
      linkId: string
      name: string
      offerId: string
      paintIndex: number
      paintSeed: number
      quality: string
      saleRestricted: boolean
      tradable: boolean
      tradeLockDuration: number
      viewAtSteam: string
      withdrawable: boolean
   }
   gameId: string
   gameType: string
   image: string
   inMarket: boolean
   itemId: string
   lockStatus: boolean
   owner: string
   ownerDetails: {
      id: string
      avatar: string
      wallet: string
   }
   price: {
      DMC: string
      USD: string
   }
   productId: string
   slug: string
   status: string
   title: string
   type: string
}

export interface INeshastoreSkin {
   bot: {
      steamId: string
   }
   category: number
   exterior: string
   float: string
   id: number
   img: string
   imgLarge: string
   inspectLink: string
   itemNameBr: string
   marketHashName: string
   name: string
   oldPrice: string
   originName: string
   paintSeed: number
   phase: {
      id: number
      paintIndex: number
      phase: string
      phaseFull: string
      phasePt: string
   }
   price: string
   qualityName: string
   qualityNameBr: string
   rarity: number
   rarityName: string
   rarityNameBr: string
   slug: string
   slugType: string
   status: number
   stickers: []
   tags: []
   tradelockExpiration: string
   type: number
   weaponType: string
   weaponTypeBr: string
   wearName: string
}

export interface IDashSkin {
   appID: number
   assetid: string
   availableAt: string
   classid: string
   createdAt: string
   discount: number
   exterior: string
   fee: string
   icon_url: string
   instanceid: string
   instant: boolean
   item_type: string
   listed: boolean
   market_hash_name: string
   market_actions: [
      {
         link: string
         name: string
      }
   ]
   bot: {
      steamID64: string
   }
   name: string
   price: number
   quality: string
   rarity: string
   steamPrice: number
   stickers: []
   tradedAt: string
   type: string
   updatedAt: string
   user: string
   wear_data: {
      defindex: number
      floatvalue: number
      image: string
      paintindex: number
      paintseed: number
      quality: number
      rarity: number
      stickers: []
   }
   __v: number
   _id: string
}

export type TSort = 'price' | 'float'
export type TOrder = 'asc' | 'desc'

export type TStoreParam = 'csmoney' | 'dmarket' | 'neshastore' | 'dash'

export interface IApiParams {
   name?: string
   limit?: number
   page?: number
   sort?: TSort
   order?: TOrder
   stores?: TStoreParam[] | null
}

export interface ISkin {
   id: string
   store: {
      name: string
      url: string
      icon: string
      skinUrl?: string
   }
   name: string
   image: string
   quality: string
   float: number
   pattern: number
   price: number
   priceFormated: string
   inspect: string
   availableAt: number
}

export type TSkins = ISkin[]
