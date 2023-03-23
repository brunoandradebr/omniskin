import { TStoreParam } from 'services/types/api'

import { useOmniskin } from 'stores/omniskin'

import { Container } from './style'

const storeList = [
  {
    name: 'csmoney',
    image: 'https://cs.money/img/favicon.ico',
  },
  {
    name: 'dmarket',
    image: 'https://cdn-front-static.dmarket.com/prod/v1-209-2/assets/img/fav.ico',
  },
  {
    name: 'neshastore',
    image: 'https://i.ibb.co/MM51ZSZ/Logo-Nesha-sem-fundo.png',
  },
  {
    name: 'dash',
    image: 'https://raichu-uploads.s3.amazonaws.com/logo_dash-skins_mxE7PD.png',
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
            className={`store ${store.name} ${
              params.stores?.includes(store.name as TStoreParam) && '--is-active'
            }`}
            onClick={handleOnChange.bind(this, store.name as TStoreParam)}
          >
            <img src={store.image} />
          </div>
        ))}
      </div>
    </Container>
  )
}
