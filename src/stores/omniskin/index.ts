import create from 'zustand'

import { api } from 'services/api'

import { OminiskinState } from './types'

const randomSkinName = [
   'butterfly',
   'bayoneta',
   'karambit',
   'talon',
   'skeleton knife',
   'cobalt skulls',
]

const randomIndex = Math.round(Math.random() * (randomSkinName.length - 1))

export const useOmniskin = create<OminiskinState>((set) => ({
   skins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((fakeSkin) => ({
      id: window.crypto.randomUUID(),
      name: '',
      float: 0,
      image: '',
      pattern: 0,
      price: 0,
      priceFormated: '',
      quality: '',
      store: {
         icon: '',
         name: '',
         url: '',
      },
      inspect: '',
      availableAt: 0,
   })),
   isFetching: true,
   resultTotal: 0,
   params: {
      name: randomSkinName[randomIndex],
      limit: 10,
      page: 0,
      order: 'desc',
      sort: 'price',
      stores: ['csmoney', 'dmarket', 'neshastore', 'dash'],
   },
   fetch: async (params, keepPrevious = false) => {
      set(() => ({ isFetching: true }))

      if (keepPrevious === false) localStorage.setItem('dmarketPage', '')

      const skins = await api.get(params)

      const resultTotal = skins.length

      set((state) => ({
         skins: keepPrevious
            ? api.sortSkins(
                 [...state.skins, ...skins],
                 params?.sort ?? 'price',
                 params?.order ?? 'desc'
              )
            : api.sortSkins(
                 [...skins],
                 params?.sort ?? 'price',
                 params?.order ?? 'desc'
              ),
         isFetching: false,
         resultTotal,
      }))
   },
   setParams: (params) => {
      set((state) => ({
         ...state,
         params: { ...state.params, ...params },
      }))
   },
}))
