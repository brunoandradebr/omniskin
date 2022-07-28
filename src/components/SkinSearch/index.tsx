import React, { ChangeEvent } from 'react'

import { useOmniskin } from 'stores/omniskin'

import { StoreFilter } from './StoreFilter'
import { SortButton } from './SortButton'
import { ISortButton } from './SortButton/types'

import { Container } from './style'

const randomSkinName = [
   'butterfly',
   'bayoneta',
   'karambit',
   'talon',
   'skeleton knife',
]

const randomIndex = Math.round(Math.random() * (randomSkinName.length - 1))

export const SkinSearch = () => {
   const fetchSkins = useOmniskin((state) => state.fetch)

   const [debounce, setDebounce] = React.useState<number>()
   const [filterName, setFilterName] = React.useState(
      randomSkinName[randomIndex]
   )
   const [filterSort, setFilterSort] = React.useState<ISortButton>({
      sort: 'price',
      order: 'desc',
   })
   const [filterStores, setFilterStores] = React.useState<string[] | null>([])

   React.useEffect(() => {
      const loadSkins = async () => {
         fetchSkins({
            name: filterName,
            sort: filterSort?.sort,
            order: filterSort?.order,
            stores: filterStores,
         })
      }

      clearTimeout(debounce)
      setDebounce(setTimeout(loadSkins, 1000))
   }, [filterName, filterSort, filterStores])

   const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) => {
      setFilterName(event.target.value)
   }

   const handleFilterSort = (sort: ISortButton) => {
      setFilterSort(sort)
   }

   const handleFilterStores = (stores: string[] | null) => {
      setFilterStores(stores)
   }

   return (
      <Container>
         <input
            placeholder='skin name...'
            value={filterName}
            onChange={handleChangeFilterName}
         />
         <SortButton onClick={handleFilterSort} />
         <StoreFilter onChange={handleFilterStores} />
      </Container>
   )
}
