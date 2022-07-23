import { TSort, TOrder } from 'services/types/api'

export interface ISortButtonProps {
   onClick: (sort: ISortButton) => void
}

export interface ISortButton {
   sort: TSort
   order: TOrder
}

export type TSortButtonList = ISortButton[]
