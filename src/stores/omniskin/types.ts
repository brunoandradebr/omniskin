import { IApiParams, TSkins } from '../../services/types/api'

export interface OminiskinState {
   skins: TSkins
   fetch: (params?: IApiParams) => void
}
