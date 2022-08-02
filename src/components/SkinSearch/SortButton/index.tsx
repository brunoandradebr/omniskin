import React from 'react'

import { MdAttachMoney as PriceIcon } from 'react-icons/md'
import { AiOutlineFunction as FloatIcon } from 'react-icons/ai'
import {
   BsSortUpAlt as SortUpIcon,
   BsSortDownAlt as SortDownIcon,
} from 'react-icons/bs'

import { useOmniskin } from 'stores/omniskin'

import { TSortButtonList } from './types'

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

export const SortButton = () => {
   const params = useOmniskin((state) => state.params)
   const setParams = useOmniskin((state) => state.setParams)

   const [currentState, setCurrentState] = React.useState(
      sortStates.findIndex(
         (state) => state.order === params.order && state.sort === params.sort
      )
   )

   const handleOnClick = () => {
      const newState = (currentState + 1) % sortStates.length

      setCurrentState(newState)

      const { order, sort } = sortStates[newState]

      setParams({
         sort,
         order,
         page: 0,
      })
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
