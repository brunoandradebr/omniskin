import React from 'react'

import { MdAttachMoney as PriceIcon } from 'react-icons/md'
import { AiOutlineFunction as FloatIcon } from 'react-icons/ai'
import {
   BsSortUpAlt as SortUpIcon,
   BsSortDownAlt as SortDownIcon,
} from 'react-icons/bs'

import { TSortButtonList, ISortButtonProps } from './types'

import { Container } from './style'

const sortStates: TSortButtonList = [
   {
      sort: 'price',
      order: 'asc',
   },
   {
      sort: 'price',
      order: 'desc',
   },
   {
      sort: 'float',
      order: 'asc',
   },
   {
      sort: 'float',
      order: 'desc',
   },
]

export const SortButton = (props: ISortButtonProps) => {
   const [currentState, setCurrentState] = React.useState<number>(1)

   const handleOnClick = () => {
      const newState = (currentState + 1) % sortStates.length
      setCurrentState(newState)
      if (props.onClick) props.onClick(sortStates[newState])
   }

   const SortPriceAsc = () => (
      <div className='sort-button'>
         <div className='sort-fieldIcon'>
            <PriceIcon />
         </div>
         <div className='sort-orderIcon'>
            <SortUpIcon />
         </div>
      </div>
   )

   const SortPriceDesc = () => (
      <div className='sort-button'>
         <div className='sort-fieldIcon'>
            <PriceIcon />
         </div>
         <div className='sort-orderIcon'>
            <SortDownIcon />
         </div>
      </div>
   )

   const SortFloatAsc = () => (
      <div className='sort-button'>
         <div className='sort-fieldIcon'>
            <FloatIcon />
         </div>
         <div className='sort-orderIcon'>
            <SortUpIcon />
         </div>
      </div>
   )

   const SortFloatDesc = () => (
      <div className='sort-button'>
         <div className='sort-fieldIcon'>
            <FloatIcon />
         </div>
         <div className='sort-orderIcon'>
            <SortDownIcon />
         </div>
      </div>
   )

   const renderSortButton = React.useCallback(() => {
      switch (currentState) {
         case 0:
            return <SortPriceAsc />
            break
         case 1:
            return <SortPriceDesc />
            break
         case 2:
            return <SortFloatAsc />
            break
         case 3:
            return <SortFloatDesc />
            break
      }
   }, [currentState])

   return <Container onClick={handleOnClick}>{renderSortButton()}</Container>
}
