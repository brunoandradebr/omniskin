import create from 'zustand'

import { api } from 'services/api'

import { OminiskinState } from './types'

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
   })),
   isFetching: true,
   fetch: async (params) => {
      set(() => ({ isFetching: true }))

      const skins = await api.get(params)

      set(() => ({
         skins: [...skins],
         isFetching: false,
      }))
   },
}))
