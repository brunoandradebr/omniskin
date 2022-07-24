import React from 'react'

import { IStoreFilterProps } from './types'

import { Container } from './style'

const storeList = [
   {
      name: 'csmoney',
      image: 'https://cs.money/img/favicon.png',
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

export const StoreFilter = (props: IStoreFilterProps) => {
   const [activeStores, setActiveStores] = React.useState(
      storeList.map((store) => store.name)
   )

   React.useEffect(() => {
      if (props.onChange) props.onChange(activeStores)
   }, [activeStores])

   const handleOnChange = (store: string) => {
      setActiveStores((state) =>
         activeStores.includes(store)
            ? state.filter((activeStore) => activeStore !== store)
            : [...state, store]
      )
   }

   return (
      <Container>
         <div className='store-list'>
            {storeList.map((store) => (
               <div
                  key={store.name}
                  className={`store ${store.name} ${
                     activeStores.includes(store.name) && '--is-active'
                  }`}
                  onClick={handleOnChange.bind(this, store.name)}
               >
                  <img src={store.image} />
               </div>
            ))}
         </div>
      </Container>
   )
}
