import { TSort, TOrder } from 'services/types/api'

export interface ISortButton {
   sort: TSort
   order: TOrder
}

export type TSortButtonList = ISortButton[]
