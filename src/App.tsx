import React, { ChangeEvent } from 'react'

import { api } from './services/api'
import { TSkins } from './services/types/api'

import './app.css'

function App() {
   const [debounce, setDebounce] = React.useState<number>()
   const [filterName, setFilterName] = React.useState('')
   const [skinList, setSkinList] = React.useState<TSkins>([])

   React.useEffect(() => {
      const loadSkins = async () => {
         const skins: TSkins = await api.get({
            name: filterName,
         })
         setSkinList(skins)
      }

      clearTimeout(debounce)
      setDebounce(setTimeout(loadSkins, 1000))
   }, [filterName])

   const handleChangeFilterName = (event: ChangeEvent<HTMLInputElement>) => {
      setFilterName(event.target.value)
   }

   return (
      <div className='app-container'>
         <div className='header'>
            <h1>OmniSkin</h1>
         </div>

         <div className='skin-filter'>
            <input
               placeholder='skin name...'
               value={filterName}
               onChange={handleChangeFilterName}
            />
         </div>

         <div className='skin-list'>
            {skinList &&
               skinList.map((skin) => (
                  <div key={skin.id} className='skin-item'>
                     <div className='skin-imageContainer'>
                        <img className='skin-image' src={skin.image} />
                        <img
                           title={skin.store.name}
                           alt={skin.store.name}
                           className='skin-store'
                           src={skin.store.icon}
                        />
                     </div>
                     <div className='skin-description'>
                        <div className='skin-name'>{skin.name}</div>
                        <div className='skin-quality'>
                           <span>float</span> <b>{skin.quality}</b> /{' '}
                           {Number(skin.float).toFixed(4)}
                        </div>
                        <div className='skin-pattern'>
                           <span>pattern</span> {skin.pattern}
                        </div>
                        <div className='skin-price'>
                           <span>price</span> {skin.priceFormated}
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   )
}

export default App
