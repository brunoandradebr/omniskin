import create from 'zustand'

import { api } from 'services/api'

import { OminiskinState } from './types'

export const useOmniskin = create<OminiskinState>((set) => ({
   skins: [],
   isFetching: true,
   fetch: async (params) => {
      set(() => ({ isFetching: true }))

      const skins = await api.get(params)

      set(() => ({
         skins: [...skins],
      }))

      setTimeout(() => {
         set(() => ({
            isFetching: false,
         }))
      }, 400)
   },
}))
