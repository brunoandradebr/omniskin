import { IApiParams, TSkins } from 'services/types/api'

export interface OminiskinState {
   skins: TSkins
   isFetching: boolean
   fetch: (params?: IApiParams) => void
}
