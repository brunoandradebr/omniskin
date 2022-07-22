import React from 'react'

import { useOmniskin } from '../../stores/omniskin'

import { Card } from '../Card'

import { Container } from './style'

export const SkinList = () => {
   const skinList = useOmniskin((state) => state.skins)
   const fetchSkins = useOmniskin((state) => state.fetch)

   React.useEffect(() => {
      ;(() => {
         fetchSkins({
            name: 'talon',
         })
      })()
   }, [])

   return (
      <Container>
         {skinList &&
            skinList.map((skin) => <Card key={skin.id} skin={skin} />)}
      </Container>
   )
}
