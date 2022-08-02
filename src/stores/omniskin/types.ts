import { IApiParams, TSkins } from 'services/types/api'

export interface OminiskinState {
   skins: TSkins
   isFetching: boolean
   params: IApiParams
   resultTotal: number
   fetch: (params?: IApiParams, keepPrevious?: boolean) => void
   setParams: (params?: IApiParams) => void
}
