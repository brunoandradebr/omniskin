import { ISkin } from 'services/types/api'
import { useOmniskin } from 'stores/omniskin'

import { TbEye as InspectIcon } from 'react-icons/tb'

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
                  <a href={skin.inspect} title='Inspect in game'>
                     <InspectIcon />
                  </a>
               </div>
               <div className='skin-description'>
                  <div className='skin-name'>{skin.name}</div>
                  <div className='skin-quality'>
                     <span title={String(skin.float)}>float</span>
                     {skin.quality && skin.float >= 0 ? (
                        <>
                           <b> {skin.quality}</b>
                           {''}
                           {String(skin.float).substring(0, 8)}
                        </>
                     ) : (
                        <> --- </>
                     )}
                  </div>
                  <div className='skin-pattern'>
                     <span>pattern</span>{' '}
                     {skin.pattern && skin.pattern >= 0
                        ? skin.pattern
                        : ' --- '}
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
