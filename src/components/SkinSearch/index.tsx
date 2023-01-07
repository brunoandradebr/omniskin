import React from 'react'

import { useOmniskin } from 'stores/omniskin'

import { NameFilter } from './NameFilter'
import { StoreFilter } from './StoreFilter'
import { SortButton } from './SortButton'
import { SkinTester } from './SkinTester'

import { Container } from './style'

export const SkinSearch = () => {
  const fetchSkins = useOmniskin(state => state.fetch)
  const params = useOmniskin(state => state.params)

  const [debounce, setDebounce] = React.useState<number>()

  React.useEffect(() => {
    const loadSkins = async () => {
      await fetchSkins(params)
    }
    clearTimeout(debounce)
    setDebounce(setTimeout(loadSkins, 1000))
  }, [params.name, params.sort, params.stores, params.order])

  return (
    <Container>
      <NameFilter />
      <SortButton />
      <StoreFilter />
      <SkinTester />
    </Container>
  )
}
