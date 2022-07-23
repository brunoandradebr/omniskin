import { useOmniskin } from 'stores/omniskin'

import { Card } from 'components/Card'

import { Container } from './style'

export const SkinList = () => {
   const skinList = useOmniskin((state) => state.skins)

   return (
      <Container>
         {skinList &&
            skinList.map((skin) => <Card key={skin.id} skin={skin} />)}
      </Container>
   )
}
