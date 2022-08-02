import React, { ChangeEvent } from 'react'

import { useOmniskin } from 'stores/omniskin'

import { Container } from './style'

export const NameFilter = () => {
   const params = useOmniskin((state) => state.params)
   const setParams = useOmniskin((state) => state.setParams)

   const [inputValue, setInputValue] = React.useState(params.name)
   const [debounce, setDebounce] = React.useState<number>()

   React.useEffect(() => {
      const changeParams = async () => {
         setParams({
            name: inputValue,
            page: 0,
         })
      }
      clearTimeout(debounce)
      if (inputValue) setDebounce(setTimeout(changeParams, 1000))
   }, [inputValue])

   const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
   }

   return (
      <Container>
         <input
            placeholder='skin name...'
            value={inputValue}
            onChange={handleChangeFilterName}
         />
      </Container>
   )
}
