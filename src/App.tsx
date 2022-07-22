import { Header } from 'components/Header'
import { SkinSearch } from 'components/SkinSearch'
import { SkinList } from 'components/SkinList'

import { Container, GlobalStyles } from 'style'

function App() {
   return (
      <Container>
         <Header />
         <SkinSearch />
         <SkinList />
         <GlobalStyles />
      </Container>
   )
}

export default App
