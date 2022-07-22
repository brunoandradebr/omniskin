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

export type TSort = 'price' | 'float'
export type TOrder = 'asc' | 'desc'

export interface IApiParams {
   name?: string
   limit?: number
   sort?: TSort
   order?: TOrder
}

export interface ISkin {
   id: string
   store: {
      name: string
      url: string
      icon: string
   }
   name: string
   image: string
   quality: string
   float: number
   pattern: number
   price: number
   priceFormated: string
}

export type TSkins = ISkin[]
