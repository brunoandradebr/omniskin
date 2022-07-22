import React, { ChangeEvent } from 'react'

import { useOmniskin } from '../../stores/omniskin'

import { Container } from './style'

export const SkinSearch = () => {
   const fetchSkins = useOmniskin((state) => state.fetch)

   const [debounce, setDebounce] = React.useState<number>()
   const [filterName, setFilterName] = React.useState('talon')

   React.useEffect(() => {
      const loadSkins = () => {
         fetchSkins({
            name: filterName,
         })
      }

      clearTimeout(debounce)
      setDebounce(setTimeout(loadSkins, 500))
   }, [filterName])

   const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) => {
      setFilterName(event.target.value)
   }

   return (
      <Container>
         <input
            placeholder='skin name...'
            value={filterName}
            onChange={handleChangeFilterName}
         />
      </Container>
   )
}
