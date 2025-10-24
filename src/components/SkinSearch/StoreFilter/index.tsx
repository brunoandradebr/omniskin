import { TStoreParam } from 'services/types/api'

import { useOmniskin } from 'stores/omniskin'

import { Container } from './style'

import csmoneyLogo from './assets/csmoney.ico'
import dmarketLogo from './assets/dmarket.ico'
import neshaLogo from './assets/nesha.png'
import dashLogo from './assets/dash.png'

const storeList = [
  {
    name: 'csmoney',
    image: csmoneyLogo,
  },
  {
    name: 'dmarket',
    image: dmarketLogo,
  },
  {
    name: 'neshastore',
    image: neshaLogo,
  },
  {
    name: 'dash',
    image: dashLogo,
  },
]

export const StoreFilter = () => {
  const params = useOmniskin(state => state.params)
  const setParams = useOmniskin(state => state.setParams)

  const handleOnChange = (store: TStoreParam) => {
    setParams({
      page: 0,
      stores: params?.stores?.includes(store)
        ? params.stores.filter(oldStore => oldStore !== store)
        : [...(params.stores as []), store],
    })
  }

  return (
    <Container>
      <div className="store-list">
        {storeList.map(store => (
          <div
            key={store.name}
            title={store.name}
            className={`store ${store.name} ${params.stores?.includes(store.name as TStoreParam) && '--is-active'}`}
            onClick={handleOnChange.bind(this, store.name as TStoreParam)}
          >
            <img src={store.image} />
          </div>
        ))}
      </div>
    </Container>
  )
}
