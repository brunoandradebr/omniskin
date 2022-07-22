import create from 'zustand'

import { api } from '../../services/api'

import { OminiskinState } from './types'

export const useOmniskin = create<OminiskinState>((set) => ({
   skins: [],
   fetch: async (params) => {
      const skins = await api.get(params)
      set((state) => ({
         skins: [...skins],
      }))
   },
}))
