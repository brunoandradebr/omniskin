import { ISkin } from 'services/types/api'

import { useOmniskin } from 'stores/omniskin'

import { Container } from './style'

interface IProps {
   skin: ISkin
}

export const Card = ({ skin }: IProps) => {
   const isFetching = useOmniskin((state) => state.isFetching)

   return (
      <Container
         className={`${isFetching ? '--is-loading' : ''}`}
         href={skin.store.skinUrl}
         target='_blank'
      >
         {isFetching === false ? (
            <>
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
                     <span>float</span>
                     {skin.quality ? (
                        <>
                           <b> {skin.quality}</b> /{' '}
                           {Number(skin.float).toFixed(4)}
                        </>
                     ) : (
                        <> --- </>
                     )}
                  </div>
                  <div className='skin-pattern'>
                     <span>pattern</span>{' '}
                     {skin.pattern ? skin.pattern : ' --- '}
                  </div>
                  <div className='skin-price'>
                     <span>price</span> {skin.priceFormated}
                  </div>
               </div>
            </>
         ) : null}
      </Container>
   )
}
