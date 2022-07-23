import React, { ChangeEvent } from 'react'

import { useOmniskin } from 'stores/omniskin'

import { SortButton } from './SortButton'
import { ISortButton } from './SortButton/types'

import { Container } from './style'

export const SkinSearch = () => {
   const fetchSkins = useOmniskin((state) => state.fetch)

   const [debounce, setDebounce] = React.useState<number>()
   const [filterName, setFilterName] = React.useState('ak-47')
   const [filterSort, setFilterSort] = React.useState<ISortButton>({
      sort: 'price',
      order: 'asc',
   })

   React.useEffect(() => {
      const loadSkins = async () => {
         fetchSkins({
            name: filterName,
            sort: filterSort?.sort,
            order: filterSort?.order,
         })
      }

      clearTimeout(debounce)
      setDebounce(setTimeout(loadSkins, 1000))
   }, [filterName, filterSort])

   const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) => {
      setFilterName(event.target.value)
   }

   const handleFilterSort = (sort: ISortButton) => {
      setFilterSort(sort)
   }

   return (
      <Container>
         <input
            placeholder='skin name...'
            value={filterName}
            onChange={handleChangeFilterName}
         />
         <SortButton onClick={handleFilterSort} />
      </Container>
   )
}
